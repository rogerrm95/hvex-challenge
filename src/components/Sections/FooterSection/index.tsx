import Image from 'next/image'
import Link from 'next/link'
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from '@phosphor-icons/react'

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

          <div className="social-medias">
            <h4>Confira nosssas redes</h4>

            <div>
              <Link
                href="https://www.linkedin.com/company/hvexoficial/"
                title="Linkedin - HVEX"
              >
                <LinkedinLogo size={50} name="Linkedin" />
              </Link>
              <Link
                href="https://pt-br.facebook.com/HVEX.MG/"
                title="Facebook - HVEX"
              >
                <FacebookLogo size={50} name="Facebook" />
              </Link>

              <Link
                href="https://www.instagram.com/hvex_oficial/"
                title="Instagram - HVEX"
              >
                <InstagramLogo size={50} name="Instagram" />
              </Link>

              <Link
                href="https://www.youtube.com/channel/UCK5Z6eCnlYHVkHijYzb1Iow"
                title="Youtube - HVEX"
              >
                <YoutubeLogo size={50} name="Youtube" />
              </Link>
            </div>
          </div>
        </Top>

        <Bottom>
          <span>HVEX © 2021 | Todos os direitos reservados.</span>
          <a></a>
          <Link href="politicas-privacidade">Políticas de Privacidade</Link>
          <Link href="termos-de-uso">Termos de Uso</Link>
        </Bottom>
      </Content>
    </FooterSectionContainer>
  )
}
