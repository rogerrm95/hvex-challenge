import styled from 'styled-components'

export const SectionContainer = styled.section`
  background-color: ${(props) => props.theme.colors.white};
  padding: 3rem 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  h2 {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }

  .commom-questions {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`
