import styled from 'styled-components'

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    a {
      line-height: normal;
      display: inline-block;
      text-decoration: none;
      color: ${(props) => props.theme.color['gray-200']};
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.color['gray-200']};
      }
    }
  }
`
