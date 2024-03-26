import styled from 'styled-components'

export const ParagraphLink = styled.div`
  font-size: 14px;
  margin-bottom: 0.4rem;
  width: max-content;
  line-height: ${(props) => props.theme.lineHeight.base};
`

export const InterestsNavLink = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  line-height: normal;
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &:hover {
    p {
      opacity: 0.5;
    }

    svg {
      opacity: 0.5;
    }
  }

  p {
    color: ${(props) => props.theme.color['gray-100']};
    border-bottom: 1px solid transparent;
  }

  svg {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.color['gray-200']};
    border-bottom: 1px solid transparent;
  }

  /* :nth-child(1) {
    color: ${(props) => props.theme.color['gray-100']};
    border-bottom: 1px solid transparent;
  }

  :last-child {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.color['gray-200']};
    border-bottom: 1px solid transparent;
  } */

  &:hover {
    /* opacity: 0.5; */
  }
`

export const HoverScreenContainer = styled.div`
  z-index: 1100;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  top: -147px;
  right: -150px;
  width: 150px;
  height: 150px;
  background-color: rgba(40, 40, 40, 0.95);
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  border: 1px solid grey;

  span {
    height: 100px;

    img {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      background-size: cover;
      width: 100%;
      height: 100%;
      filter: grayscale(80%);
    }
  }

  div {
    h1 {
      font-size: ${(props) => props.theme.textSizes.sm};
      color: ${(props) => props.theme.color['gray-050']};
      white-space: normal; /* Allow text to wrap */
      overflow-wrap: break-word; /* Ensure long words break if necessary */
      padding-top: 4px;
      padding-left: 14px;
      padding-right: 14px;
      padding-bottom: 12px;
    }
  }
`
