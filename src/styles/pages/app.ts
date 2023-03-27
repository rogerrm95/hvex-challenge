import styled from 'styled-components'

export const AppContainer = styled.main`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
