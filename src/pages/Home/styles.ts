import styled from 'styled-components'

export const AboutPageContainer = styled.div``

export const HomePageContainer = styled.div`
  //mobile first
  width: 100%;
  padding: 32px 24px;

  /* Media query for tablets (767px) */
  @media (min-width: 768px) {
    padding: 48px;
    display: flex;
    flex-direction: column;
    gap: 64px;
  }

  /* Media query for desktops (1024px) */
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 35% auto;
    gap: 64px;
    margin: 0 auto;
    overflow-x: hidden;
  }
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    a {
      line-height: normal;
      display: inline-block;
      text-decoration: none;
      color: ${(props) => props.theme.color['gray-200']};
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.color['gray-200']};
        color: ${(props) => props.theme.color['gray-075']};
      }
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  overflow-x: hidden;
`
