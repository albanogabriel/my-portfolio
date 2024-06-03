import styled from 'styled-components'

export const GridContainer = styled.div`
  display: none;

  /* Media query for desktops (1024px) */
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 40% 30% auto;
    top: 90px;
    right: -50px; /* Ajuste o valor conforme necessário para posicionar corretamente */
    width: 1300px; /* Defina a largura que desejar */
    height: 100%; /* Defina a altura que desejar */
    gap: 16px;

    .column {
      display: flex;
      flex-direction: column;
    }

    .column-1 {
      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${(props) => props.theme.color['gray-100']};
        color: ${(props) => props.theme.color['gray-600']};
        width: 100%;
        padding: 8px;
        border: 1px solid transparent;
        border-radius: 4px;
        text-decoration: none;
        font-weight: bold;

        &:hover {
          background-color: ${(props) => props.theme.color['gray-050']};
        }
      }
    }

    .card {
      border-radius: 16px;
      width: 100%;
      padding-bottom: 8px;
    }

    .card img {
      /* border: 1px solid ${(props) => props.theme.color['gray-075']}; */
      border-radius: 4px;
      width: 100%;
      height: auto;
      filter: grayscale(100%);
      cursor: pointer;
      opacity: 0.5;
      box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 15px;

      &:hover {
        filter: grayscale(0%);
        transition: opacity 0.3s;
        opacity: 0.8;
      }
    }
  }
`
