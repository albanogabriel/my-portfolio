import { AnchorHTMLAttributes, ReactNode } from 'react'

import { Button, StyledLinkButton, StyledLinkButtonSecundary } from './styles'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string
  target?: string
  children: ReactNode
  width?: string
  variant?: 'primary' | 'secundary'
}

export function LinkButtonPrimary({
  to,
  children,
  target,
  width,
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  if (to) {
    if (variant === 'primary') {
      return (
        <StyledLinkButton to={to} target={target} {...props} width={width}>
          {children}
        </StyledLinkButton>
      )
    } else if (variant === 'secundary') {
      return (
        <StyledLinkButtonSecundary
          to={to}
          target={target}
          {...props}
          width={width}
        >
          {children}
        </StyledLinkButtonSecundary>
      )
    }
  } else {
    return <Button>{children}</Button>
  }
}
