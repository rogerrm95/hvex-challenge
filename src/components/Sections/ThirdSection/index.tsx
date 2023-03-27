// Components //
import { Card } from '../../Card'

import { SectionContainer, Content } from './styles'

export function ThirdSection() {
  return (
    <SectionContainer>
      <Content>
        <article>
          <h2>Omni trafo</h2>

          <h3>
            É o dispositivo capaz de <br /> integrar os transformadores as redes
            inteligentes
          </h3>

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
            <img src="/assets/renewable-energy.svg" alt="" />
            <p>Sistema de Proteção</p>
          </Card>

          <Card className="card">
            <img src="/assets/surface.svg" alt="" />
            <p>Integração de dados</p>
          </Card>

          <Card className="card">
            <img src="/assets/electrical-assets.svg" alt="" />
            <p>Gestão de Ativos Elétricos</p>
          </Card>

          <Card className="card">
            <img src="/assets/smart-communication.svg" alt="" />
            <p>Comunicação inteligente</p>
          </Card>
        </div>
      </Content>
    </SectionContainer>
  )
}
