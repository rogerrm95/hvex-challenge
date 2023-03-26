import styled from 'styled-components'

export const BadgeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  div {
    width: 76px;
    height: 76px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.blue700};

    img {
      object-fit: contain;
    }
  }

  span {
    text-align: center;
    line-height: 140%;
    font-size: ${(props) => props.theme.fontSizes.xs};
  }

  :hover {
    span {
      font-weight: 700;
    }
  }

  // TABLET + //
  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
`
