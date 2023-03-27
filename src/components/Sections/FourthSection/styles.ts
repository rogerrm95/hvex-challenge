import styled from 'styled-components'

export const SectionContainer = styled.section`
  background-color: ${(props) => props.theme.colors.white};
  padding: 1.5rem;
  min-height: 750px;

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
  gap: 1.5rem;

  & > img {
    display: none;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;

    h2:first-of-type {
      text-transform: uppercase;
    }

    hr {
      all: unset;
      width: 170px;
      height: 5px;
      background-color: ${(props) => props.theme.colors.blue200};
    }

    h2 {
      text-align: center;
    }

    p {
      font-size: ${(props) => props.theme.fontSizes.sm};
      line-height: 160%;
      text-align: center;
      color: ${(props) => props.theme.colors.black};
    }

    .badge-box {
      display: grid;
      grid-template-columns: repeat(2, 140px);
      gap: 1.5rem;
      place-items: center;
      margin-top: 2rem;
    }
  }

  // TABLET //
  @media (min-width: 768px) {
    article .badge-box {
      grid-template-columns: repeat(3, 140px);
    }
  }

  // LAPTOP //
  @media (min-width: 996px) {
    gap: 2rem;
    margin-bottom: 2rem;

    & > img {
      display: block;
      max-width: 400px;
      height: auto;
      object-fit: contain;
      transform: scaleX(-1);
    }

    article {
      align-items: flex-start;

      h2,
      p {
        text-align: left;
      }

      p {
        font-size: ${(props) => props.theme.fontSizes.sm};
      }
    }
  }

  // DESKTOP + //
  @media (min-width: 1196px) {
    gap: 2rem;

    article {
      p {
        font-size: ${(props) => props.theme.fontSizes.md};
      }

      h2,
      p {
        max-width: 85%;
      }

      .badge-box {
        grid-template-columns: repeat(4, 140px);
      }
    }

    & > img {
      max-width: 500px;
    }
  }
`
