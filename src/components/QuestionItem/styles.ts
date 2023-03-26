import styled, { keyframes } from 'styled-components'

const slideIn = keyframes({
  from: {
    opacity: '0',
    transform: 'translateY(-25px)',
  },
  to: {
    opacity: '1',
    transform: 'translateY(0px)',
  },
})

export const QuestionItemContainer = styled.div`
  padding: 1.5rem;
  max-width: 770px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  cursor: pointer;

  transition: all 0.3s;

  hr {
    all: unset;
    background-color: ${(props) => props.theme.colors.gray200};
    height: 1px;
  }

  svg.accordion-opened {
    transition: all 0.3s;
    transform: rotate(180deg);
  }

  svg.accordion-closed {
    transition: all 0.3s;
    transform: rotate(0);
  }

  :hover {
    background-color: ${(props) => props.theme.colors.gray100};
  }
`

export const Question = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: 700;
  line-height: 140%;
`

export const Response = styled.div`
  line-height: 140%;
  font-size: ${(props) => props.theme.fontSizes.xs};
  text-align: justify;
  animation: ${slideIn} 0.5s ease-in;
`
