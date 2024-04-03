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
      margin: 100px auto;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 1px;
      height: 100%;
      left: 31px;
      background-color: ${(props) => props.theme.color['gray-200']};
      margin-left: -3px;

      @media only screen and (min-width: 1024px) {
        left: 50%;
      }
    }

    .container {
      position: relative;

      @media only screen and (min-width: 1024px) {
        padding: 10px 50px;
        width: 50%;
      }

      .roundedContainer {
        position: absolute;
        top: 40px;
        left: 21px;
        z-index: 100;

        @media only screen and (min-width: 1024px) {
          display: flex;
          justify-content: flex-end;
          gap: 32px;
          flex-direction: row;
          font-size: 0.875rem;
          align-items: center;
          right: -5px;
        }

        .rounded {
          width: 15px;
          height: 15px;
          z-index: 10;
          border-radius: 999px;
          background-color: ${(props) => props.theme.color['gray-075']};
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
        left: 50%;
      }

      .roundedContainer {
        font-size: 0.875rem;

        @media only screen and (min-width: 1024px) {
          flex-direction: row-reverse;
          left: -10px;
          max-width: max-content;
        }

        span {
          @media only screen and (min-width: 1024px) {
            right: 25px;
          }
        }
      }
    }
  }
`
