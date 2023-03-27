import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.blue700};
  padding: 1rem;
  min-height: 323px;
  display: flex;

  // LAPTOP + //
  @media (min-width: 996px) {
    align-items: center;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  // LAPTOP + //
  @media (min-width: 996px) {
    justify-content: space-between;
  }
`

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  img {
    display: inline-block;
    margin-bottom: 1rem;
  }

  address {
    font-style: normal;
  }

  .address,
  .contact,
  .social-medias {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    h4,
    span {
      text-align: center;
    }

    h4 {
      color: ${(props) => props.theme.colors.blue100};
      line-height: 0;
    }

    span {
      font-size: ${(props) => props.theme.fontSizes.xs};
      color: ${(props) => props.theme.colors.white};
      line-height: 140%;
    }
  }

  .social-medias {
    div {
      display: flex;
      gap: 1rem;

      svg {
        background-color: ${(props) => props.theme.colors.blue100};
        color: ${(props) => props.theme.colors.white};
        padding: 0.5rem;
        border-radius: 9999px;
        cursor: pointer;
        transition: all 0.3s ease;

        :hover {
          filter: brightness(0.9);
          transform: scale(1.25);
        }
      }
    }
  }

  // LAPTOP + //
  @media (min-width: 996px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    img {
      align-self: flex-start;
      margin: 0;
    }

    .address,
    .contact,
    .social-medias {
      align-items: flex-start;
    }

    .address,
    .contact {
      h4,
      span {
        text-align: left;
      }
    }
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 1rem;
  gap: 1rem;
  width: 100%;

  border-top: 1px solid ${(props) => props.theme.colors.white};
  padding-top: 2rem;

  span,
  a {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.xs};
    text-align: center;
    user-select: none;
  }

  a {
    cursor: pointer;
    transition: color 0.3s;

    :hover {
      color: ${(props) => props.theme.colors.blue200};
    }
  }
`
