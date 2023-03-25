import { Button } from '../../Button'
import { SectionContainer } from './styles'

export function HomeSection() {
  return (
    <SectionContainer>
      <div className="content">
        <article>
          <h2>
            Tenha Informações em tempo real das condições dos ativos e com o
            monitoramento inteligente
          </h2>

          <p>
            Tenha acesso a informações em tempo real, administração remota de
            dados importantes da rede elétrica como: tensão, corrente, potência
            passante, energia, temperatura, sobrecarga entre outros, mapeando
            seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas
            técnicas e não técnicas.
          </p>

          <Button variant="secondary">Quero mais informações</Button>
        </article>

        <img
          src="/assets/devices.png"
          alt="Dispositivo"
          title="Dispositivo"
          aria-label="Dispositivo"
        />
      </div>
    </SectionContainer>
  )
}
