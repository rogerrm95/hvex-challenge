import styled, { css } from 'styled-components'

interface ButtonBaseProps {
  variant: 'primary' | 'secondary'
}

export const ButtonBase = styled.button<ButtonBaseProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 170px;
  padding: 0.75rem 1rem;
  border-radius: 4px;

  font-size: ${(props) => props.theme.fontSizes.xs};
  border: 1px solid ${(props) => props.theme.colors.blue200};
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.variant === 'primary'
      ? css`
          background-color: ${props.theme.colors.blue200}};
          color: ${props.theme.colors.white};
        `
      : css`
          background-color: transparent;
          color: ${props.theme.colors.blue200};
        `};

  &:hover {
    ${(props) =>
      props.variant === 'primary'
        ? css`
            background-color: transparent;
            color: ${props.theme.colors.blue200};
          `
        : css`
            background-color: ${props.theme.colors.blue200};
            color: ${props.theme.colors.white};
            border-color: ${props.theme.colors.blue200};
          `}
  }
`
