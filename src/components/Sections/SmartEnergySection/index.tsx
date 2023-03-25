import { CheckCircle } from '@phosphor-icons/react'
import { SectionContainer, Content } from './styles'

export function SmartSection() {
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
            <li>
              <CheckCircle size={20} weight="fill" />
              Monitoramento inteligente de ativos
            </li>
            <li>
              <CheckCircle size={20} weight="fill" />
              Melhoria dos indicadores de continuidade
            </li>
            <li>
              <CheckCircle size={20} weight="fill" />
              Comunicação Modular
            </li>
            <li>
              <CheckCircle size={20} weight="fill" />
              Monitoramento inteligente de ativos
            </li>
            <li>
              <CheckCircle size={20} weight="fill" />
              Business Inteligence
            </li>
            <li>
              <CheckCircle size={20} weight="fill" />
              Redução de Perdas técnicas e Não técnicas
            </li>
          </ul>
        </article>
      </Content>
    </SectionContainer>
  )
}
