import styled from 'styled-components'

export const CasesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 32px;
  max-width: 1200px;
  width: 100%;
  padding: 32px;
  margin: 0 auto;

  & > h1 {
    text-align: center;
  }
`

export const CardContainer = styled.div`
  display: grid;
  gap: 32px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 450px));
  overflow-x: hidden;
`
