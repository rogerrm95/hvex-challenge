import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from '@phosphor-icons/react'
import Image from 'next/image'
import { FooterSectionContainer, Bottom, Top, Content } from './styles'

export function FooterSection() {
  return (
    <FooterSectionContainer>
      <Content>
        <Top>
          <Image
            src="/assets/logo.svg"
            alt="HVEX Logomarca"
            title="VEX Logomarca"
            width={123}
            height={57}
            quality={80}
          />

          <address className="address">
            <h4>Endereço</h4>

            <span>
              R. Ismael Pinto de Noronha,
              <br />
              86 - Nossa Sra. de Fatima,
              <br /> Itajubá - MG, 37502-508
            </span>
          </address>

          <address className="contact">
            <h4>Contato</h4>
            <span>
              Tel: (35) 3622-2699 <br />
              E-mail: contato@hvex.com.br
            </span>
          </address>

          <div className="social">
            <h4>Confira nosssas redes</h4>

            <div>
              <LinkedinLogo size={50} name="Linkedin" />
              <FacebookLogo size={50} name="Facebook" />
              <InstagramLogo size={50} name="Instagram" />
              <YoutubeLogo size={50} name="Youtube" />
            </div>
          </div>
        </Top>

        <Bottom>
          <span>HVEX © 2021 | Todos os direitos reservados.</span>
          <a></a>
          <a>Políticas de Privacidade</a>
          <a>Termos de Uso</a>
        </Bottom>
      </Content>
    </FooterSectionContainer>
  )
}
