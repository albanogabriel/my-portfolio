import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Button = styled.button``

interface StyledLinkButtonProps {
  width?: string | '100%'
}

export const StyledLinkButton = styled(Link)<StyledLinkButtonProps>`
  display: flex;
  width: ${(props) => props.width};
  gap: 0.5rem;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  color: ${(props) => props.theme.color['gray-800']};
  background-color: ${(props) => props.theme.color['gray-050']};
  font-family: ${(props) => props.theme.fontFamilies.default}, sans-serif;
  font-weight: 600;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${(props) => props.theme.color['gray-900']};
    background-color: ${(props) => props.theme.color.white};

    svg {
      transform: translateX(15px);
    }
  }

  &:active {
    scale: 1.025;
  }
`

export const StyledLinkButtonSecundary = styled(StyledLinkButton)`
  color: ${(props) => props.theme.color['gray-050']};
  background-color: ${(props) => props.theme.color['gray-400']};

  svg {
    transition: transform 0.3s ease;
    color: ${(props) => props.theme.color['gray-050']};
  }

  &:hover {
    color: ${(props) => props.theme.color['gray-050']};
    background-color: ${(props) => props.theme.color['gray-300']};

    svg {
      transform: rotate(-210deg);
    }
  }
`
