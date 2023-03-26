import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 160px;
  height: 170px;

  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.blue100};
  background-color: ${(props) => props.theme.colors.blue700};

  img {
    width: 64px;
    object-fit: contain;
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.sm};
    color: ${(props) => props.theme.colors.blue100};
    font-weight: 700;
    text-align: center;
  }

  // LAPTOP + //
  @media (min-width: 996px) {
    width: 200px;
    height: 210px;

    img {
      width: 112px;
      object-fit: contain;
    }
  }
`
