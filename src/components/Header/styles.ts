import { Cross1Icon } from '@radix-ui/react-icons'
import styled, { keyframes } from 'styled-components'

interface HeaderProps {
  isScrolling: boolean
}

// mobile
export const HeaderMobileContainer = styled.header<HeaderProps>`
  position: fixed; /* Change this line */
  top: 0;
  left: 0;
  right: 0;

  transition: background-color 0.3s ease;

  background: ${(props) =>
    props.isScrolling
      ? 'radial-gradient(circle at 30% 70%, #2D2022, transparent 90%), rgba(36, 41, 46, 0.875)'
      : 'transparent'};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  box-shadow:
    // eixo x / eixo y / blur / Spread
    0 0px 3px 0 rgba(255, 255, 255, 0.4),
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);

  div {
    a {
      white-space: nowrap;
      list-style: none;
      text-decoration: none;
      color: ${({ theme }) => theme.color['gray-050']};
      font-weight: 400;
      cursor: pointer;

      span {
        font-weight: 900;
      }
    }

    &:hover {
      background-color: (${({ theme }) => theme.color['gray-600']});
    }
  }

  ul {
    display: flex;
    gap: 1rem;

    li {
      list-style: none;
      font-size: ${({ theme }) => theme.textSizes.sm};

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.color['gray-100']};
      }
    }
  }
`

export const HamburgerMenuIconWithHover = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  scale: 1.125;

  &:hover {
    background-color: ${({ theme }) => theme.color['gray-700']};
  }

  &:active {
    background-color: ${({ theme }) => theme.color['gray-500']};
  }
`

// mobile - MenuOpen

export const PortalContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
`

export const HamburgerMenuContainer = styled.div`
  z-index: 1000;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color['gray-900']};
  opacity: 0.982;
  overflow: hidden;
  /* padding: 16px; */

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    font-size: 14px;
    color: ${({ theme }) => theme.color['gray-050']};
    font-weight: bold;
    padding: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.color['gray-600']};
  }

  ul {
    margin: 8px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    li {
      cursor: pointer;
      list-style: none;

      a {
        display: flex;
        padding: 8px 16px;
        border-radius: 8px;
        text-decoration: none;
        color: ${({ theme }) => theme.color['gray-100']};

        &:hover {
          background-color: ${({ theme }) => theme.color['gray-500']};
        }

        &.active {
          // tem que ficar pareado com o react-router-dom, as rotas precisam estar pareadas
          color: ${({ theme }) => theme.color['gray-500']};
          background-color: ${({ theme }) => theme.color['gray-100']};
        }
      }
    }
  }
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(90deg);
  }
`

export const StyledCross1Icon = styled(Cross1Icon)`
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    color: ${({ theme }) => theme.color['gray-100']};
    animation: ${rotate360} 0.225s linear;
  }
`

// desktop
export const HeaderDesktopContainer = styled(HeaderMobileContainer)`
  a {
    list-style: none;
    text-decoration: none;
    color: ${({ theme }) => theme.color['gray-050']};
    font-weight: 400;
    cursor: pointer;

    span {
      font-weight: 900;
    }
  }

  div {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      gap: 0.25rem;
      transform: translateX(+50%);

      a {
        white-space: nowrap;
        display: flex;
        padding: 4px 12px;
        border-radius: 8px;
        text-decoration: none;
        color: ${({ theme }) => theme.color['gray-100']};

        &.active {
          // tem que ficar pareado com o react-router-dom, as rotas precisam estar pareadas
          color: ${({ theme }) => theme.color['gray-500']};
          background-color: ${({ theme }) => theme.color['gray-100']};
        }
      }
    }
  }
`
