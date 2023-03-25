import { HTMLAttributes, ReactNode } from 'react'
import { ButtonBase } from './styles'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: ReactNode | string
}

export function Button({
  variant = 'primary',
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonBase variant={variant} {...rest}>
      {children}
    </ButtonBase>
  )
}
