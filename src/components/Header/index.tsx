import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'

import { navBarDesktop } from '../../lib/data'
import {
  HamburgerMenuContainer,
  HamburgerMenuIconWithHover,
  HeaderDesktopContainer,
  HeaderMobileContainer,
  PortalContainer,
  StyledCross1Icon,
  StyledGitHubIcon,
  StyledInstagramLogo,
  StyledLinkedin,
} from './styles'

export function Header() {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 890)
  const [isScrollingPage, setIsScrollingPage] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY
      const scrollPositionTrigger = 35
      setIsScrollingPage(scrollPosition > scrollPositionTrigger)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 890) {
        setIsSmallScreen(true)
      } else {
        setIsSmallScreen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function handleOpenMenuHamburger() {
    setHamburgerIsOpen(!hamburgerIsOpen)
  }

  function handleCloseMenuHamburger() {
    setHamburgerIsOpen(false)
  }

  return (
    <div>
      {isSmallScreen ? (
        // mobile
        <div>
          {hamburgerIsOpen &&
            createPortal(
              <PortalContainer>
                <HamburgerMenuContainer>
                  <div>
                    <span>
                      <a href="/"> Ag/Portfolio </a>
                    </span>
                    <nav>
                      <NavLink
                        to={'https://github.com/albanogabriel'}
                        target="_blank"
                      >
                        <StyledGitHubIcon />
                      </NavLink>
                      <NavLink
                        to={'https://linkedin.com/in/albanogabriel'}
                        target="_blank"
                      >
                        <StyledLinkedin />
                      </NavLink>
                      <NavLink
                        to={'https://instagram.com/albanogabriel'}
                        target="_blank"
                      >
                        <StyledInstagramLogo />
                      </NavLink>
                    </nav>
                    <StyledCross1Icon onClick={handleCloseMenuHamburger} />
                  </div>
                  <ul>
                    <span>Menu</span>
                    <li>
                      <NavLink
                        onClick={handleCloseMenuHamburger}
                        to={'/'}
                        title="Home"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={handleCloseMenuHamburger}
                        to={'/about'}
                        title="About"
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={handleCloseMenuHamburger}
                        to={'/projetos'}
                        title="Projetos"
                      >
                        Projetos
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={handleCloseMenuHamburger}
                        to={'/experiences'}
                        title="Experiences"
                      >
                        Experiences
                      </NavLink>
                    </li>
                  </ul>
                </HamburgerMenuContainer>
              </PortalContainer>,
              document.body,
            )}

          <HeaderMobileContainer isScrolling={isScrollingPage}>
            <div>
              <a href="/">
                albanogabriel/<span>portfolio</span>
              </a>
            </div>
            <div>
              <HamburgerMenuIconWithHover onClick={handleOpenMenuHamburger}>
                <HamburgerMenuIcon />
              </HamburgerMenuIconWithHover>
            </div>
          </HeaderMobileContainer>
        </div>
      ) : (
        // desktop
        <HeaderDesktopContainer isScrolling={isScrollingPage}>
          <div>
            <a href="/">
              albanogabriel/<span>portfolio</span>
            </a>
            <ul>
              {navBarDesktop.map((navItem) => {
                return (
                  <li key={navItem.route}>
                    <NavLink to={navItem.route} title={navItem.title}>
                      {navItem.title}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
            <nav>
              <NavLink to={'https://github.com/albanogabriel'} target="_blank">
                <StyledGitHubIcon style={{ transform: 'scale(1.125)' }} />
              </NavLink>
              <NavLink
                to={'https://linkedin.com/in/albanogabriel'}
                target="_blank"
              >
                <StyledLinkedin style={{ transform: 'scale(1.125)' }} />
              </NavLink>
              <NavLink
                to={'https://instagram.com/albanogabriel'}
                target="_blank"
              >
                <StyledInstagramLogo style={{ transform: 'scale(1.125)' }} />
              </NavLink>
            </nav>
          </div>
        </HeaderDesktopContainer>
      )}
    </div>
  )
}
