import Image from 'next/image'
// Components //
import { Button } from '../../Button'

import { SectionContainer } from './styles'

export function FirstSection() {
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

        <Image
          src="/assets/devices.png"
          alt="Dispositivo"
          title="Dispositivo Omni Trafo"
          aria-label="Dispositivo Omni Trafo"
          width={1000}
          height={1000}
        />
      </div>
    </SectionContainer>
  )
}
