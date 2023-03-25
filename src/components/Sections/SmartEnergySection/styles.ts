import styled from 'styled-components'

export const SectionContainer = styled.section`
  background-color: ${(props) => props.theme.colors.white};
  padding: 1.5rem;
  height: 900px;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    h2,
    p {
      color: ${(props) => props.theme.colors.blue700};
      text-align: center;
      line-height: 160%;
    }

    h2 {
      font-size: ${(props) => props.theme.fontSizes.xl};
    }

    p {
      font-size: ${(props) => props.theme.fontSizes.md};
    }

    ul {
      align-self: flex-start;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  img {
    display: none;
  }

  // TABLET //
  @media (min-width: 768px) {
    img {
      display: block;
      width: 250px;
    }

    article {
      align-items: flex-start;

      h2,
      p {
        text-align: left;
      }

      p {
        font-size: ${(props) => props.theme.fontSizes.xs};
      }
    }
  }

  // LAPTOP //
  @media (min-width: 996px) {
    img {
      width: 450px;
      height: auto;
      object-fit: cover;
    }
  }

  // DESKTOP + //
  @media (min-width: 1196px) {
    article p {
      max-width: 50%;
    }
  }
`
