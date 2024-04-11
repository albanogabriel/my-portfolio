import { Link } from 'react-router-dom'
import styled from 'styled-components'

const indigo4 = '#2d4874'
const plum3 = '#4d1a33'

export const CardLinkContainer = styled(Link)`
  color: ${(props) => props.theme.color['gray-050']};
  list-style: none;
  text-decoration: none;

  & > div {
    padding: 32px;
    display: flex;
    border-radius: 8px;
    height: 300px;
    position: relative;
    overflow: hidden; /* Hides any content that exceeds the boundaries of the card */

    background: linear-gradient(120deg, ${indigo4}, ${plum3});
    background-size: 200% 300%;
    animation: gradientAnimation 11s ease infinite;
    @keyframes gradientAnimation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    &:hover {
      /* offset-x | offset-y | blur-radius | spread-radius | color */
      box-shadow: 0px 6px 12px 2px rgba(0, 0, 0, 0.3);

      aside {
        img {
          transform: rotate(-3deg) translateX(-12px);
        }
      }
    }

    main {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding-right: 10%;

      .title-wrap {
        display: flex;
        flex-direction: column;
        gap: 4px;

        h1 {
          font-size: 1.25rem;
          line-height: 1.3;
        }

        p {
          font-size: 0.75rem;
          color: ${(props) => props.theme.color['gray-100']};
        }
      }

      .tech-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;

        span {
          display: flex;
          flex-direction: column;
          padding: 6px 12px;
          max-width: fit-content;
          text-align: center;
          font-size: 0.75rem;
          background-color: ${(props) => props.theme.color['gray-700']};
          border-radius: 6px;
          white-space: nowrap;
        }
      }
    }

    aside {
      width: 100%;
      height: 100%;

      img {
        display: none;
        scale: 2;
        position: absolute;
        top: 40%; /* Adjust to position the image vertically */
        right: -300px; /* Adjust to position the image horizontally */
        border-radius: 4px;
        width: 286.4px;
        height: 147.6px;
        box-shadow:
          0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        transition: transform 0.3s ease;

        @media only screen and (min-width: 375px) {
          display: block;
          right: -320px; /* Adjust to position the image horizontally */
        }

        @media only screen and (min-width: 430px) {
          display: block;
          right: -280px; /* Adjust to position the image horizontally */
        }

        @media only screen and (min-width: 500px) {
          display: block;
          right: -240px; /* Adjust to position the image horizontally */
        }

        @media only screen and (min-width: 600px) {
          display: block;
          right: -220px; /* Adjust to position the image horizontally */
        }
      }
    }
  }
`
