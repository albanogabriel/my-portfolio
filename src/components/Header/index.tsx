import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'

import {
  HamburgerMenuContainer,
  HamburgerMenuIconWithHover,
  HeaderDesktopContainer,
  HeaderMobileContainer,
  PortalContainer,
  StyledCross1Icon,
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
        hamburgerIsOpen ? (
          createPortal(
            <PortalContainer>
              <HamburgerMenuContainer>
                <span>
                  Menu
                  <StyledCross1Icon onClick={handleCloseMenuHamburger} />
                </span>
                <ul>
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
                      to={'/cases'}
                      title="Cases"
                    >
                      Cases
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
                  <li>
                    <NavLink
                      onClick={handleCloseMenuHamburger}
                      to={'/education'}
                      title="Education"
                    >
                      Education
                    </NavLink>
                  </li>
                </ul>
              </HamburgerMenuContainer>
            </PortalContainer>,
            document.body,
          )
        ) : (
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
        )
      ) : (
        <HeaderDesktopContainer isScrolling={isScrollingPage}>
          <div>
            <div>
              <a href="/">
                albanogabriel/<span>portfolio</span>
              </a>
            </div>
            <ul>
              <li>
                <NavLink to={'/about'} title="about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to={'/cases'} title="cases">
                  Cases
                </NavLink>
              </li>
              <li>
                <NavLink to={'/experiences'} title="experiences">
                  Experiences
                </NavLink>
              </li>
              <li>
                <NavLink to={'/education'} title="education">
                  Education
                </NavLink>
              </li>
            </ul>
          </div>
        </HeaderDesktopContainer>
      )}
    </div>
  )
}
