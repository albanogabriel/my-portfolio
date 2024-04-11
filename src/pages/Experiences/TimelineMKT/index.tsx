import { GraduationCap, SuitcaseSimple } from 'phosphor-react'

import { TimelineContainer } from './styles'

export function TimelineMKT() {
  return (
    <TimelineContainer>
      <div className="timeline">
        {/* Unisul - Publicidade e Propaganda */}
        <div className="container left-container">
          <div className="roundedContainer">
            <div className="rounded">
              {' '}
              <GraduationCap color="black" size={16} />
            </div>
            <span>2017 - 2022</span>
          </div>
          <div className="text-box">
            <h2>Publicidade e Propaganda</h2>
            <small>5 anos</small>
            <p>UNISUL</p>
            <span>Graduação</span>

            <small>Pedra Branca, Palhoça, SC</small>
          </div>
        </div>

        {/* Atacado Litoral */}
        <div className="container right-container">
          <div className="roundedContainer">
            <div className="rounded">
              <SuitcaseSimple color="black" size={16} />
            </div>
            <span>2017 - 2018</span>
          </div>

          <div className="text-box work">
            <h2>Designer Gráfico</h2>
            <small>6 meses</small>
            <p>Atacado Litoral</p>
            <span>Adobe Photoshop</span>
            <span>Mailchimp</span>
            <small>Estreito, Florianópolis, SC</small>
          </div>
        </div>

        {/* Luiz Althoff 1 */}
        <div className="container right-container">
          <div className="roundedContainer">
            <div className="rounded">
              <SuitcaseSimple color="black" size={16} />
            </div>
            <span>2018 - 2019</span>
          </div>
          <div className="text-box work">
            <h2>Designer Gráfico</h2>
            <small>1 ano</small>
            <p>Luiz Althoff Soluções em Imóveis</p>
            <span>Adobe Photoshop</span>
            <span>Adobe illustrator</span>
            <small>Pedra Branca, Palhoça, SC</small>
          </div>
        </div>

        {/* Luiz Althoff 2 */}
        <div className="container right-container">
          <div className="roundedContainer">
            <div className="rounded">
              <SuitcaseSimple color="black" size={16} />
            </div>
            <span>2018 - 2020</span>
          </div>
          <div className="text-box work">
            <h2>Marketing & Social Media</h2>
            <small>1 ano</small>
            <p>Luiz Althoff Soluções em Imóveis</p>
            <span>Social Media</span>
            <span>Marketing</span>
            <span>Drone & Filmaking</span>
            <span>Design Gráfico</span>
            <small>Pedra Branca, Palhoça, SC</small>
          </div>
        </div>

        {/* Abstrato - Growth Marketing */}
        <div className="container right-container">
          <div className="roundedContainer">
            <div className="rounded">
              <SuitcaseSimple color="black" size={16} />
            </div>
            <span>2018 - 2018</span>
          </div>
          <div className="text-box work">
            <h2>Growth Marketing</h2>
            <small>3 meses</small>
            <p>Abstrato co.</p>
            <span>Internship</span>
            <span>Social Media KPIs</span>

            <small>Itacorubi, Florianópolis</small>
          </div>
        </div>

        {/* Marketing - Pedra Branca */}
        <div className="container right-container">
          <div className="roundedContainer">
            <div className="rounded">
              <SuitcaseSimple color="black" size={16} />
            </div>
            <span>2021 - 2022</span>
          </div>
          <div className="text-box work">
            <h2>Marketing & Pessoas</h2>
            <p>Pedra Branca Empreendimentos Imobiliários</p>
            <small>1 ano</small>
            <span>Estágio</span>
            <span>Gestão de fornecedores</span>
            <span>Eventos</span>
            <span>Design Gráfico</span>
            <p>
              Melhor Experiencia profissional no Marketing e Produtos
              Imobiliários Imobiliários e visão de negócios
            </p>
            <small>Pedra Branca, Palhoça, SC</small>
          </div>
        </div>
      </div>
    </TimelineContainer>
  )
}
