import styled, { keyframes } from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  min-height: 100px;
  width: 100%;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.blue900};
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.25);

  .logo {
    cursor: pointer;

    img {
      object-fit: contain;
    }
  }

  // Comprar agora - Link //
  & > a:last-of-type {
    width: 170px;
    margin: 0 auto;

    border: 1px solid ${(props) => props.theme.colors.blue200};
    color: ${(props) => props.theme.colors.blue200};
    font-size: ${(props) => props.theme.fontSizes.xs};

    padding: 0.75rem 1rem;
    border-radius: 4px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.colors.blue200};
      color: ${(props) => props.theme.colors.white};
    }

    // DESKTOP //
    @media (max-width: 768px) {
      display: none;
    }
  }

  // DESKTOP //
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`

// MOBILE VERSION //
export const DropdownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;

  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 4px;

  cursor: pointer;
  transition: all 0.3s;

  svg {
    color: ${(props) => props.theme.colors.white};
    transition: all 0.3s;
  }

  &:hover {
    opacity: 0.7;
    border-color: ${(props) => props.theme.colors.blue200};

    svg {
      color: ${(props) => props.theme.colors.blue200};
    }
  }

  // DESKTOP //
  @media (min-width: 768px) {
    display: none;
  }
`

interface MenuDropdownProps {
  hasDropdownMenuOpen: boolean
}

const slideDown = keyframes({
  from: {
    transform: 'translateY(-10%)',
    opacity: 0,
  },
  to: {
    transform: 'translateY(0)',
    opacity: 1,
  },
})

export const MenuDropdown = styled.nav<MenuDropdownProps>`
  display: ${(props) => (props.hasDropdownMenuOpen ? 'flex' : 'none')};
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 100%;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  margin-top: 2rem;
  overflow: hidden;

  animation: ${slideDown} 0.3s ease-in;

  a {
    position: relative;
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
    text-align: center;
    cursor: pointer;

    transition: all 0.2s ease-in;

    &:hover {
      color: ${(props) => props.theme.colors.blue200};
    }

    &::after {
      content: '';
      height: 1px;
      width: 100vw;
      background-color: ${(props) => props.theme.colors.white};
      position: absolute;
      bottom: -12px;
      left: 0;
    }
  }

  // Comprar agora - Link //
  a:last-of-type {
    align-self: stretch;
    border: 1px solid ${(props) => props.theme.colors.blue200};
    color: ${(props) => props.theme.colors.blue200};
    padding: 0.75rem 1rem;
    border-radius: 4px;

    margin-top: 1rem;
    width: inherit;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.colors.blue200};
      color: ${(props) => props.theme.colors.white};
    }
  }

  // DESKTOP //
  @media (min-width: 768px) {
    display: none;
  }
`

// DESKTOP VERSION //
export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  a {
    position: relative;
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
    text-align: center;
    cursor: pointer;

    transition: all 0.2s ease-in;

    &:hover {
      color: ${(props) => props.theme.colors.blue200};
    }
  }

  // DESKTOP //
  @media (max-width: 768px) {
    display: none;
  }
`
