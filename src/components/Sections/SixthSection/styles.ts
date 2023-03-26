import styled from 'styled-components'

export const SixthContainer = styled.section`
  background-color: ${(props) => props.theme.colors.blue700};
  padding: 1.5rem;
  min-height: 366px;
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

  gap: 2rem;

  h2 {
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    line-height: 140%;
  }

  hr {
    all: unset;
    width: 170px;
    height: 5px;
    background-color: ${(props) => props.theme.colors.blue200};
  }
`
