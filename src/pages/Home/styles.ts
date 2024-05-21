import styled from 'styled-components'

export const AboutPageContainer = styled.div``

export const HomePageContainer = styled.div`
  //mobile first
  width: 100%;
  height: 100vh;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  footer {
    font-size: 12px;
    margin-top: auto;
    margin-bottom: 32px;
  }

  /* Media query for tablets (767px) */
  @media (min-width: 768px) {
    padding: 48px;
    gap: 64px;
  }

  /* Media query for desktops (1024px) */
  @media (min-width: 1024px) {
    overflow-x: hidden;

    main {
      display: grid;
      grid-template-columns: 45% auto;
      gap: 88px;
      margin: 0 auto;
    }
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
