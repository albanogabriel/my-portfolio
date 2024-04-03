import { styled } from 'styled-components'

export const ExperiencesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 32px;

  nav {
    display: flex;
    justify-content: center;

    span {
      cursor: pointer;
      padding-inline: 8px;
      padding-bottom: 4px;
      font-size: 0.625rem;
      border-bottom: 1px solid ${(props) => props.theme.color['gray-300']};

      @media only screen and (min-width: 375px) {
        font-size: 0.875rem;
      }

      @media only screen and (min-width: 1024px) {
        font-size: 1rem;
      }

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.color['gray-100']};
      }

      &.active {
        border-bottom: 2px solid ${(props) => props.theme.color['gray-075']};
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1200px;
    width: 100%;
    padding-top: 48px;
    margin: 0 auto;
  }
`
