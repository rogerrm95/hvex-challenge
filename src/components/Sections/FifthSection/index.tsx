import { CheckCircle } from '@phosphor-icons/react'
import Image from 'next/image'
import { ListItem } from '../../ListItem'
import { Content, SectionContainer } from './styles'

export function FifthSection() {
  return (
    <SectionContainer>
      <Content>
        <article>
          <h2>
            Desenvolvido para melhorar a performance dos ativos de distribuição
          </h2>

          <hr />

          <ul>
            <ListItem>
              <CheckCircle size={20} weight="fill" />
              Balanço energético
            </ListItem>

            <ListItem>
              <CheckCircle size={20} weight="fill" />
              Auto-diagnóstico dos transformadores
            </ListItem>

            <ListItem>
              <CheckCircle size={20} weight="fill" />
              Medidor ideal para consumidores comerciais, industriais
            </ListItem>

            <ListItem>
              <CheckCircle size={20} weight="fill" />À prova de fraude
            </ListItem>

            <ListItem>
              <CheckCircle size={20} weight="fill" />
              Melhoria dos Indicadores de Continuidade
            </ListItem>

            <ListItem>
              <CheckCircle size={20} weight="fill" />
              Maior vida útil do ativo
            </ListItem>

            <ListItem>
              <CheckCircle size={20} weight="fill" />
              Acompanhamento em tempo real das condições do equipamento
            </ListItem>
          </ul>
        </article>

        <Image
          src="/assets/transformer.png"
          alt="Transformador com o OMNI Trafo"
          title="Transformador com o OMNI Trafo"
          aria-label="Transformador com o OMNI Trafo"
          width={700}
          height={720}
          quality={100}
        />
      </Content>
    </SectionContainer>
  )
}
