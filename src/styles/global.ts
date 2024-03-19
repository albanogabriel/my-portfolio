import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  /* ::-webkit-scrollbar {
    width: 0.25rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color['gray-700']};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color['gray-500']};
    border-radius: 8px;
  } */


  body {
    background-color: black;
    color: white;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Geist, sans-serif; // font-weight: 400  , font-size: 1rem , font-family: 'Nunito', sans-serif
    line-height: 1.6;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 767px) {
    body,
    input,
    textarea,
    button {
      font-size: 1.125rem;
    }
  }
`

export const PageContainer = styled.div`
  //mobile first
  width: 100%;
  padding: 32px 24px;

  @media (min-width: 768px) {
    padding: 48px; /* Increase padding for tablets */
  }

  /* Media query for desktops (1024px) */
  @media (min-width: 1024px) {
    width: 800px;
    margin: 0 auto; /* Center the container */
  }
`
export const BigTitle = styled.h1`
  color: ${({ theme }) => theme.color['gray-050']};
  font-family: ${({ theme }) => theme.fontFamilies.BigTitle};
  font-size: ${({ theme }) => theme.textSizes['4xl']};
  font-weight: 100;
  line-height: ${({ theme }) => theme.lineHeight.base};
`

export const SmallParagraph = styled.p`
  color: ${({ theme }) => theme.color['gray-100']};
  font-size: ${({ theme }) => theme.textSizes.lg};
  font-weight: 300;
  line-height: ${({ theme }) => theme.lineHeight.base};

  strong {
    font-weight: 700;
    color: ${({ theme }) => theme.color['gray-075']};
  }
`
