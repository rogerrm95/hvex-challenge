import { OmniTrafoContainer, Content } from './styles'

export function OmniTrafoSection() {
  return (
    <OmniTrafoContainer>
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
          <div className="card">
            <img src="/assets/renewable-energy.svg" alt="" />
            <p>Sistema de Proteção</p>
          </div>

          <div className="card">
            <img src="/assets/renewable-energy.svg" alt="" />
            <p>Integração de dados</p>
          </div>

          <div className="card">
            <img src="/assets/renewable-energy.svg" alt="" />
            <p>Gestão de Ativos Elétricos</p>
          </div>

          <div className="card">
            <img src="/assets/renewable-energy.svg" alt="" />
            <p>Comunicação inteligente</p>
          </div>
        </div>
      </Content>
    </OmniTrafoContainer>
  )
}
