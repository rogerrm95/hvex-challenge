import styled from 'styled-components'

export const SectionContainer = styled.section`
  background-color: ${(props) => props.theme.colors.blue800};
  padding: 1.5rem;
  min-height: 725px;
  display: flex;
  justify-content: center;
`
export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  article {
    h2,
    h3,
    p {
      line-height: 160%;
      text-align: center;
    }

    h2,
    h3 {
      font-size: ${(props) => props.theme.fontSizes.xl};
    }

    h2 {
      color: ${(props) => props.theme.colors.white};
      margin-bottom: 3rem;
      text-transform: uppercase;
    }

    h3 {
      color: ${(props) => props.theme.colors.blue200};
      margin-bottom: 1.5rem;
      font-size: ${(props) => props.theme.fontSizes.lg};
    }

    p {
      color: ${(props) => props.theme.colors.white};
    }
  }

  // TABLET //
  @media (min-width: 768px) {
    flex-direction: row;

    article {
      h2,
      h3 {
        text-align: left;
      }
      p {
        text-align: justify;
      }
    }
  }

  .box-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
    place-items: center;

    margin-bottom: 1.5rem;
  }

  // TABLET + //
  @media (min-width: 996px) {
    article p {
      width: 85%;
    }
  }
`
