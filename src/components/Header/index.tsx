import { useState } from 'react'
import Image from 'next/image'
import { List } from '@phosphor-icons/react'

import { HeaderContainer, DropdownButton, Navbar, MenuDropdown } from './styles'

export function Header() {
  const [hasDropdownMenuOpen, setHasDropdownMenuOpen] = useState(false)

  return (
    <HeaderContainer>
      <Image
        src="/assets/logo.svg"
        alt="Logo"
        title="HVEX"
        width={123}
        height={57}
      />
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
