import { HeaderContainer, DropdownButton, Navbar, MenuDropdown } from './styles'

import { List } from '@phosphor-icons/react'
import { useState } from 'react'

export function Header() {
  const [hasDropdownMenuOpen, setHasDropdownMenuOpen] = useState(false)

  return (
    <HeaderContainer>
      <img src="/assets/logo.svg" alt="Logo" title="HVEX" />
      {/* MENU DROPDOWN - MOBILE */}
      <DropdownButton
        onClick={() => setHasDropdownMenuOpen(!hasDropdownMenuOpen)}
      >
        <List size={20} />
      </DropdownButton>

      <MenuDropdown hasDropdownMenuOpen={hasDropdownMenuOpen}>
        <a href="/">Omni trafo</a>
        <a href="/">Sinalizador de faltas</a>
        <a href="/">Acoplador DP</a>
        <button>Comprar agora</button>
      </MenuDropdown>

      {/* NAVBAR - DESKTOP */}
      <Navbar>
        <a href="">Omni trafo</a>
        <a href="">Sinalizador de faltas</a>
        <a href="">Acoplador DP</a>
      </Navbar>
      <button>Comprar agora</button>
    </HeaderContainer>
  )
}
