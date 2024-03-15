import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import {
  HamburgerMenuIconWithHover,
  HeaderDesktopContainer,
  HeaderMobileContainer,
  MenuHamburgerContainer,
} from './styles'

export function Header() {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 890)

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

  return (
    <div>
      {isSmallScreen ? (
        hamburgerIsOpen ? (
          <>
            <HeaderMobileContainer>
              <div>
                <span>
                  <a href="/">
                    Ag/<span>portfolio</span>
                  </a>
                </span>
              </div>
              <HamburgerMenuIconWithHover onClick={handleOpenMenuHamburger}>
                <HamburgerMenuIcon />
              </HamburgerMenuIconWithHover>
            </HeaderMobileContainer>
            <MenuHamburgerContainer>
              <span>Menu</span>
              <ul>
                <li>
                  <NavLink to={'/about'} title="About">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/cases'} title="Cases">
                    Cases
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/experiences'} title="Experiences">
                    Experiences
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/education'} title="Education">
                    Education
                  </NavLink>
                </li>
              </ul>
            </MenuHamburgerContainer>
          </>
        ) : (
          <HeaderMobileContainer>
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
        <HeaderDesktopContainer>
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
