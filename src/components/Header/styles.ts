import styled from 'styled-components'

// mobile
export const HeaderMobileContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  box-shadow:
    // eixo x / eixo y / blur / Spread
    0 0px 3px 0 rgba(255, 255, 255, 0.4),
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);

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
    background-color: ${({ theme }) => theme.color['gray-200']};
  }
`

// mobile menu open
export const MenuHamburgerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color['gray-900']};
  opacity: 0.982;
  padding: 16px;

  ul {
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

// desktop
export const HeaderDesktopContainer = styled(HeaderMobileContainer)`
  div {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      gap: 0.25rem;
      transform: translateX(+50%);

      a {
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
