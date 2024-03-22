import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ParagraphLink = styled.div`
  font-size: 14px;
  margin-bottom: 0.4rem;
  width: max-content;
  line-height: ${(props) => props.theme.lineHeight.base};
`

export const InterestsNavLink = styled(Link)`
  display: flex !important;
  align-items: center;
  gap: 0.2rem;
  line-height: normal;
  text-decoration: none;
  border-bottom: 1px solid transparent;

  :nth-child(1) {
    color: ${(props) => props.theme.color['gray-100']};
    border-bottom: 1px solid transparent;
  }

  :last-child {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.color['gray-200']};
    border-bottom: 1px solid transparent;
  }

  &:hover {
    opacity: 0.5;
  }
`
