import styled from 'styled-components'

export const AboutPageContainer = styled.div`
  //MOBILE FIRST
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 32px 24px;

  nav {
    display: flex;
    justify-content: center;

    span {
      cursor: pointer;
      padding-inline: 8px;
      padding-bottom: 4px;
      font-size: 0.625rem;
      border-bottom: 1px solid ${(props) => props.theme.color['gray-200']};

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.color['gray-200']};
      }

      &.checked {
        border-bottom: 2px solid ${(props) => props.theme.color['gray-075']};
      }

      @media only screen and (min-width: 420px) {
        font-size: 0.875rem;
      }
    }
  }

  section {
    .section-area {
      padding: 12px;
    }

    .stickyMenu {
      display: none;
    }
  }

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

  /* TABLET (767px) */
  @media (min-width: 768px) {
    padding: 48px;

    nav {
    }

    section {
      .section-area {
      }

      .stickyMenu {
        display: none;
      }
    }
  }

  /* DESKTOP (1024px) */
  @media (min-width: 1024px) {
    width: 800px;
    margin: 0 auto;
    padding-bottom: 200px;

    nav {
      display: none;
    }

    section {
      display: grid;
      gap: 4rem;
      grid-template-columns: 70% 30%;

      .section-area {
      }

      .stickyMenu {
        padding-top: 50px;
        display: flex;
        flex-direction: column;

        height: max-content;
        position: sticky;
        top: 70px;

        .h2-div {
          border-left: 1px solid grey;
          padding: 16px 0px 16px 24px;
          text-align: left;
          background-color: rgba(0, 0, 0, 0.2);

          h2 {
            font-size: 20px;
            white-space: nowrap;
            color: ${(props) => props.theme.color['gray-050']};
            line-height: ${(props) => props.theme.lineHeight.heading};
          }
        }

        .age-wrapper {
          padding: 16px 0px 16px 24px;
          border-left: 1px solid grey;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .interest-wrapper {
          padding: 8px 0px 8px 24px;
          border-left: 1px solid grey;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        h3 {
          font-size: 18px;
          color: ${(props) => props.theme.color['gray-050']};
          line-height: ${(props) => props.theme.lineHeight.base};
        }
      }
    }
  }

  footer {
    height: 200px;
  }
`

export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: 1rem;
  }

  /* Media query for tablets (767px) */
  @media (min-width: 768px) {
  }

  /* Media query for desktops (1024px) */
  @media (min-width: 1024px) {
    &::after {
      z-index: 1100;
      content: '‘‘';
      position: absolute;
      top: 90px;
      left: -90px;
      line-height: 1;
      letter-spacing: -0.045em;
      color: ${(props) => props.theme.color['gray-500']};
      font-size: 130px;
      font-family: 'Times New Roman', Times, serif;
    }

    section {
      .section-area {
        /* position: relative; */
      }
    }
  }
`

export const LinkAboutMe = styled.p`
  font-size: 14px !important;
  width: max-content;
  color: ${(props) => props.theme.color['gray-075']};
  line-height: ${(props) => props.theme.lineHeight.base};
  cursor: pointer;
  font-size: 1rem;
  gap: 0.2rem;
  line-height: normal;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  color: ${(props) => props.theme.color['gray-100']};

  &:hover {
    opacity: 0.5;
  }

  &.checked {
    color: ${(props) => props.theme.color['blue-link']};
    border-bottom: 1px solid ${(props) => props.theme.color['blue-link']};

    &:hover {
      opacity: 1;
    }
  }
`
