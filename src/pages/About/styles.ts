import styled from 'styled-components'

export const PageContainer = styled.div`
  //mobile first
  width: 100%;
  padding: 32px 24px;

  @media (min-width: 767px) {
    // desktop
    width: 1400px;
    margin: 0 auto;
  }
`
