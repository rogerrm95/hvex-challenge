// Components //
import Image from 'next/image'
import { Card } from '../../Card'

import { SectionContainer, Content } from './styles'

export function ThirdSection() {
  return (
    <SectionContainer>
      <Content>
        <article>
          <h2>Omni trafo</h2>

          <h2>
            É o dispositivo capaz de integrar os transformadores as redes
            inteligentes
          </h2>

          <p>
            O Omni Trafo envia informações em tempo real, permitindo a
            administração remota de dados importantes da rede elétrica, como
            tensão, corrente, potência passante, energia, temperatura,
            sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida
            útil dos ativos e aferindo perdas técnicas e não técnicas.
          </p>
        </article>

        <div className="box-card">
          <Card>
            <Image
              src="/assets/renewable-energy.svg"
              alt="Sistema de Proteção"
              title="Sistema de Proteção"
              aria-label="Sistema de Proteção"
              width={120}
              height={120}
            />
            <p>Sistema de Proteção</p>
          </Card>

          <Card className="card">
            <Image
              src="/assets/surface.svg"
              alt="Integração de dados"
              title="Integração de dados"
              aria-label="Integração de dados"
              width={120}
              height={120}
            />
            <p>Integração de dados</p>
          </Card>

          <Card className="card">
            <Image
              src="/assets/electrical-assets.svg"
              alt="Gestão de Ativos Elétricos"
              title="Gestão de Ativos Elétricos"
              aria-label="Gestão de Ativos Elétricos"
              width={120}
              height={120}
            />
            <p>Gestão de Ativos Elétricos</p>
          </Card>

          <Card className="card">
            <Image
              src="/assets/smart-communication.svg"
              alt="Comunicação inteligente"
              title="Comunicação inteligente"
              aria-label="Comunicação inteligente"
              width={120}
              height={120}
            />
            <p>Comunicação inteligente</p>
          </Card>
        </div>
      </Content>
    </SectionContainer>
  )
}
