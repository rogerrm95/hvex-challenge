import { theme } from '@/src/styles/theme'
import { CheckCircle } from '@phosphor-icons/react'

import { ListItem } from '../../ListItem'

import { SectionContainer, Content } from './styles'

export function SecondSection() {
  return (
    <SectionContainer>
      <Content className="content">
        <img
          src="/assets/energy.png"
          alt="Transformador"
          title="Transformador"
        />
        <article>
          <h2>
            Seja bem-vindo a era da <br />
            energia inteligente
          </h2>

          <p>
            As redes inteligentes são um caminho sem volta, o desenvolvimento e
            disceminação de dispositivos de medição e monitoramento são as
            ferramentas para redução de custos, perdas e trazem mais
            previsibilidade para as utilities de energia.
          </p>

          <ul>
            <ListItem>
              <CheckCircle
                size={20}
                weight="fill"
                color={`${theme.colors.blue500}`}
              />
              Monitoramento inteligente de ativos
            </ListItem>

            <ListItem>
              <CheckCircle
                size={20}
                weight="fill"
                color={`${theme.colors.blue500}`}
              />
              Melhoria dos indicadores de continuidade
            </ListItem>

            <ListItem>
              <CheckCircle
                size={20}
                weight="fill"
                color={`${theme.colors.blue500}`}
              />
              Comunicação Modular
            </ListItem>

            <ListItem>
              <CheckCircle
                size={20}
                weight="fill"
                color={`${theme.colors.blue500}`}
              />
              Monitoramento inteligente de ativos
            </ListItem>

            <ListItem>
              <CheckCircle
                size={20}
                weight="fill"
                color={`${theme.colors.blue500}`}
              />
              Business InteListItemgence
            </ListItem>

            <ListItem>
              <CheckCircle
                size={20}
                weight="fill"
                color={`${theme.colors.blue500}`}
              />
              Redução de Perdas técnicas e Não técnicas
            </ListItem>
          </ul>
        </article>
      </Content>
    </SectionContainer>
  )
}
