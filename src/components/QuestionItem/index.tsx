import { useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'

import { Question, QuestionItemContainer, Response } from './styles'

interface QuestionItemProps {
  question: string
  response: string
}

export function QuestionItem({ question, response }: QuestionItemProps) {
  const [isAccordionOpen, setIsccordionOpen] = useState(false)
  return (
    <QuestionItemContainer onClick={() => setIsccordionOpen(!isAccordionOpen)}>
      <Question>
        <p>{question}</p>

        <CaretDown
          size={24}
          weight="bold"
          className={`${
            isAccordionOpen ? 'accordion-opened' : 'accordion-closed'
          }`}
        />
      </Question>

      {isAccordionOpen && (
        <>
          <hr />

          <Response>{response}</Response>
        </>
      )}
    </QuestionItemContainer>
  )
}
