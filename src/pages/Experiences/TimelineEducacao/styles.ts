import styled from 'styled-components'

export const TimelineContainer = styled.div`
  color: white;
  margin: 16px auto;

  .timeline {
    position: relative;
    margin-left: 10px;
    margin-right: 40px;

    @media only screen and (min-width: 768px) {
      max-width: 1200px;
      margin: 24px auto;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 1px;
      height: 100%;
      left: 24px;
      background-color: ${(props) => props.theme.color['gray-200']};
      margin-left: -3px;

      @media only screen and (min-width: 1024px) {
        left: 50%;
      }
    }

    .container {
      position: relative;

      @media only screen and (min-width: 1024px) {
        padding: 10px 40px;
        width: 50%;
      }

      .roundedContainer {
        position: absolute;
        top: 40px;
        z-index: 100;
        left: 6px;

        @media only screen and (min-width: 1024px) {
          display: flex;
          gap: 32px;
          font-size: 0.875rem;
          align-items: center;
          left: 351px;
        }

        .rounded {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          z-index: 10;
          border-radius: 999px;
          background-color: ${(props) => props.theme.color['gray-075']};

          svg {
            text-align: center;
          }
        }

        span {
          display: none;

          @media only screen and (min-width: 1024px) {
            color: ${(props) => props.theme.color['gray-075']};
            display: flex;
            position: absolute;
            right: -100px;
            white-space: nowrap;
          }
        }
      }

      .text-box {
        position: relative;
        margin-left: 50px;
        margin-bottom: 10px;
        padding: 20px 30px;
        border: 1px solid white;
        border-radius: 6px;
        font-size: 13px;
        display: flex;
        flex-direction: column;
        gap: 4px;

        h2 {
          line-height: 1.2;
        }

        p {
          color: ${(props) => props.theme.color['gray-100']};
        }

        span {
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid ${(props) => props.theme.color['gray-100']};
          width: fit-content;
          margin-top: 6px;

          &:last-of-type {
            margin-bottom: 16px;
          }
        }

        @media only screen and(min-width: 1024px) {
          font-size: 15px;
        }
      }
    }

    .left-container {
      left: 0;
    }

    .right-container {
      left: 0;

      @media only screen and (min-width: 1024px) {
        left: 43%;
      }

      .roundedContainer {
        font-size: 0.875rem;

        @media only screen and (min-width: 1024px) {
          flex-direction: row-reverse;
          left: 34px;
          max-width: max-content;
        }

        span {
          @media only screen and (min-width: 1024px) {
            left: -100px;
          }
        }
      }

      .work {
        border: 1px solid grey;
        background: linear-gradient(
          120deg,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.3)
        );

        h2 {
          color: ${(props) => props.theme.color['gray-800']};
        }

        small {
          color: ${(props) => props.theme.color['gray-800']};
        }

        p {
          color: ${(props) => props.theme.color['gray-700']};
        }

        span {
          border: 1px solid ${(props) => props.theme.color['gray-800']};
          color: ${(props) => props.theme.color['gray-800']};
        }
      }

      .dev {
        background: linear-gradient(
          120deg,
          rgba(45, 72, 116, 0.7),
          rgba(77, 26, 51, 0.7)
        );

        h2 {
        }

        small {
        }

        p {
          color: ${(props) => props.theme.color['gray-075']};
        }
      }
    }
  }
`
