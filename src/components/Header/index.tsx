import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { List } from '@phosphor-icons/react'

import { HeaderContainer, DropdownButton, Navbar, MenuDropdown } from './styles'

export function Header() {
  const [hasDropdownMenuOpen, setHasDropdownMenuOpen] = useState(false)

  return (
    <HeaderContainer>
      <Link href="/" className="logo">
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          title="HVEX"
          width={123}
          height={57}
        />
      </Link>
      {/* MENU DROPDOWN - MOBILE */}
      <DropdownButton
        onClick={() => setHasDropdownMenuOpen(!hasDropdownMenuOpen)}
      >
        <List size={20} />
      </DropdownButton>

      <MenuDropdown hasDropdownMenuOpen={hasDropdownMenuOpen}>
        <Link href="/omni-trafo">Omni trafo</Link>
        <Link href="/sinalizador-de-faltas">Sinalizador de faltas</Link>
        <Link href="/acoplador-dp">Acoplador DP</Link>
        <Link href="/orcamento" as="button">
          Comprar agora
        </Link>
      </MenuDropdown>

      {/* NAVBAR - DESKTOP */}
      <Navbar>
        <Link href="/omni-trafo">Omni trafo</Link>
        <Link href="/sinalizador-de-faltas">Sinalizador de faltas</Link>
        <Link href="/acoplador-dp">Acoplador DP</Link>
      </Navbar>
      <Link href="/orcamento" as="button">
        Comprar agora
      </Link>
    </HeaderContainer>
  )
}
