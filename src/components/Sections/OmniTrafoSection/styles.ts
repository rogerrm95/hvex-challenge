import styled from 'styled-components'

export const OmniTrafoContainer = styled.section`
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

  // TABLET + //
  @media (min-width: 996px) {
    article p {
      width: 85%;
    }
  }

  .box-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
    place-items: center;

    margin-bottom: 1.5rem;

    .card {
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
    }
  }
`
