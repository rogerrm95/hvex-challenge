import { HTMLAttributes, ReactNode } from 'react'
import { CardContainer } from './styles'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Card({ children, ...rest }: CardProps) {
  return <CardContainer>{children}</CardContainer>
}
