import Link from 'next/link'
import styled from 'styled-components'

export const SectionContainer = styled.section`
  background-color: ${(props) => props.theme.colors.blue800};
  padding: 1.5rem;
  height: 750px;

  display: flex;
  justify-content: center;
  position: relative;

  .content {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  h2,
  p {
    text-align: center;
    color: ${(props) => props.theme.colors.white};
    line-height: 160%;
    max-width: 90%;
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.sm};
    margin-bottom: 1.5rem;
  }

  p + button {
    margin: 0 auto;
  }

  img {
    display: none;
  }

  // TABLET //
  @media (min-width: 768px) {
    overflow: hidden;

    justify-content: flex-start;
    gap: 1.5rem;

    article {
      align-items: flex-start;
    }

    h2,
    p {
      text-align: left;
    }

    p + button {
      margin: 0;
    }

    p {
      font-size: ${(props) => props.theme.fontSizes.sm};
    }

    img {
      display: inline-block;
      max-width: 250px;
      height: auto;
      object-fit: cover;
    }
  }

  // LAPTOP OR + //
  @media (min-width: 992px) {
    img {
      max-width: 350px;
    }

    p {
      font-size: ${(props) => props.theme.fontSizes.md};
    }
  }
`

export const WhatsAppLink = styled(Link)`
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  display: none;

  // TABLET //
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
    border-radius: 50%;

    background-color: ${(props) => props.theme.colors.blue200};
    color: ${(props) => props.theme.colors.white};
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);

    cursor: pointer;
    z-index: 99;

    transition: all 0.3s;

    :hover {
      transform: scale(1.1);
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.75);
      filter: brightness(0.85);
    }
  }
`
