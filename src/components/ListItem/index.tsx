import { HTMLAttributes, ReactNode } from 'react'
import { ListItemContainer } from './styles'

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode
}

export function ListItem({ children, ...rest }: ListItemProps) {
  return <ListItemContainer>{children}</ListItemContainer>
}
