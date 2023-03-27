import Image from 'next/image'
import { BadgeItem } from '../../BadgeItem'
import { SectionContainer, Content } from './styles'

export function FourthSection() {
  return (
    <SectionContainer>
      <Content>
        <Image
          src="/assets/devices.png"
          alt="Dispositivo"
          title="Dispositivo Omni Trafo"
          aria-label="Dispositivo Omni Trafo"
          width={550}
          height={780}
          quality={100}
        />

        <article>
          <h2>Omni trafo</h2>
          <hr />
          <h2>Monitoramento inteligente de transformadores de distribuição</h2>
          <p>
            O Omni trafo é uma solução consolidada para monitoramento de ativos.
            Através deste equipamento, informações importantes da rede são
            enviadas em tempo real, permitindo, assim, a administração remota de
            dados como:
          </p>

          <div className="badge-box">
            <BadgeItem
              sourceImage="/assets/icons/speedometer.svg"
              text="Monitoramento de  tensão, corrente e carga"
            />
            <BadgeItem
              sourceImage="/assets/icons/arrow-fall.svg"
              text="Análise de perda de vida útil do transformador"
            />
            <BadgeItem
              sourceImage="/assets/icons/up-and-down.svg"
              text="Medição do balanço energético de Perdas"
            />
            <BadgeItem
              sourceImage="/assets/icons/no-charges.svg"
              text="Medição de sobrecarga"
            />

            <BadgeItem
              sourceImage="/assets/icons/signal.svg"
              text="Análise de Fator de potência"
            />
            <BadgeItem
              sourceImage="/assets/icons/harmony-signal.svg"
              text="Harmônicas de corrente e tensão"
            />

            <BadgeItem
              sourceImage="/assets/icons/thermometer.svg"
              text="Medição de temperatura interna"
            />

            <BadgeItem
              sourceImage="/assets/icons/voltage-meter.svg"
              text="Supervisão de  baixa tensão"
            />
          </div>
        </article>
      </Content>
    </SectionContainer>
  )
}
