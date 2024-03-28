import styled from 'styled-components'

export const TestePageContainer = styled.div`
  display: flex;
  gap: 40px;
  padding-top: 80px;

  .sticky {
    position: sticky;
    top: 80px;
    height: 100px;
    padding-left: 80px;
  }

  #section1 {
    margin-bottom: 500px;
  }
  #section2 {
    margin-top: 500px;
    margin-bottom: 500px;
  }
  #section3 {
    margin-top: 500px;
    margin-bottom: 500px;
    height: 2000px;
  }
  #section4 {
    margin-top: 500px;
    margin-bottom: 200px;
  }

  a.active {
    color: red; // Change to your desired color
    // Add any other styles for the active link here
  }
`
