import { QuestionItem } from '../../QuestionItem'

import { SeventhSectionContainer, Content } from './styles'

export function SeventhSection() {
  return (
    <SeventhSectionContainer>
      <Content>
        <h2>Perguntas Frequentes</h2>

        <div className="commom-questions">
          <QuestionItem
            question="Pra que tipo de transformador é feito o medidor inteligente da HVEX (Omni Trafo)?"
            response="O Omni trafo foi desenvolvido para integrar transformadores de distribuição as redes inteligentes, o dispositivo é ideal para
            concessionárias, fabricantes de transformadores, ou empresas
            privadas que desejam ter mais controle e informações de sua rede
            elétrica"
          />

          <QuestionItem
            question="O omni trafo pode ser utilizado como um medidor de qualidade de energia (qualimetro)?"
            response="Não, nesse caso o caso recomendamos a utilização de um modelo específico."
          />

          <QuestionItem
            question="O omni trafo pode ser utilizado como um medidor de faturamento?"
            response="Não, nesse caso não recomendamos o nosso medidor, nesse caso recomendamos modelos especificados pelo módulo do PRODIST e homologados pela concessionária."
          />

          <QuestionItem
            question="Ele pode ser instalado em transformadores que já estão em campo ??"
            response="Sim, o dispositivo pode ser instalado em equipamentos em operação, porem a aferição de temperatura do topo de óleo será apenas ambiente."
          />
        </div>
      </Content>
    </SeventhSectionContainer>
  )
}
