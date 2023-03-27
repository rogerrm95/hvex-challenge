import styled from 'styled-components'

export const SectionContainer = styled.section`
  background-color: ${(props) => props.theme.colors.gray100};
  padding: 1.5rem;
  min-height: 900px;

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

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    h2 {
      color: ${(props) => props.theme.colors.blue700};
      text-align: center;
    }

    hr {
      all: unset;
      width: 170px;
      height: 5px;
      background-color: ${(props) => props.theme.colors.blue200};
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 1rem;
    }
  }

  // VERIFICAR //
  & > img {
    display: none;
    object-fit: contain;
  }

  // LAPTOP //
  @media (min-width: 996px) {
    & > img {
      display: block;
      max-width: 500px;
      height: auto;
    }

    article {
      align-items: flex-start;

      h2 {
        text-align: left;
      }
    }
  }

  // DESKTOP //
  @media (min-width: 1196px) {
    & > img {
      display: block;
      max-width: 700px;
      height: auto;
    }

    article h2 {
      max-width: 90%;
    }
  }
`
