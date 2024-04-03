import { Book, Code, GraduationCap, SuitcaseSimple } from 'phosphor-react'

import { TimelineContainer } from './styles'

export function TimelineEducacao() {
  return (
    <TimelineContainer>
      <div className="timeline">
        {/*  */}
        <div className="container left-container">
          <div className="roundedContainer">
            <div className="rounded">
              {' '}
              <GraduationCap color="black" size={16} />
            </div>
            <span>2017 - 2022</span>
          </div>
          <div className="text-box">
            <h2>UNISUL</h2>
            <span>Publicidade e Propaganda</span>
            <span>Graduação</span>
            <small>Pedra Branca, Palhoça, SC</small>
            <p>Faculdade de Publicidade e Propaganda</p>
            <small>5 anos</small>
          </div>
        </div>

        {/*  */}

        <div className="container right-container">
          <div className="roundedContainer">
            <div className="rounded">
              <SuitcaseSimple color="black" size={16} />
            </div>
            <span>2019 - 2020</span>
          </div>
          <div className="text-box">
            <h2>Luiz Althoff Soluções em Imóveis</h2>
            <span>Marketing</span>
            <small>Pedra Branca, Palhoça, SC</small>
            <p>Responsável pelo setor de marketing e social media</p>
            <small>1 ano</small>
          </div>
        </div>

        <div className="container left-container">
          <div className="roundedContainer">
            <div className="rounded">
              <SuitcaseSimple color="black" size={16} />
            </div>
            <span>2018 - 2018</span>
          </div>
          <div className="text-box">
            <h2>Abstrato co.</h2>
            <span>Growth Marketing</span>
            <small>Itacorubi, Florianópolis</small>
            <p>
              Experiencia muito curta em Growth MKT. Mas com grandes em
              aprendizados interpessoais
            </p>
          </div>
        </div>

        <div className="container right-container">
          <div className="roundedContainer">
            <div className="rounded">
              <SuitcaseSimple color="black" size={16} />
            </div>
            <span>2021 - 2022</span>
          </div>
          <div className="text-box">
            <h2>Pedra Branca Empreendimentos Imobiliários</h2>
            <span>Marketing</span>
            <small>Itacorubi, Florianópolis</small>
            <p>Empresa referência em produtos imobiliários e urbanismo</p>
            <small>1 ano</small>
          </div>
        </div>

        <div className="container left-container">
          <div className="roundedContainer">
            <div className="rounded">
              {' '}
              <Book color="black" size={16} />
            </div>
            <span>2022 - 2023</span>
          </div>
          <div className="text-box">
            <h2>EBAC</h2>
            <small>11 meses</small>
            <span>Curso</span>
            <span>UX / UI</span>
            <span>Front-end</span>
            <small>Florianópolis, SC</small>
            <p>
              Curso de Fullstack Design da EBAC, Escola Britânica de Artes e
              Tecnologia
            </p>
          </div>
        </div>

        <div className="container right-container">
          <div className="roundedContainer">
            <div className="rounded">
              {' '}
              <GraduationCap color="black" size={16} />
            </div>
            <span>2023 - 2024</span>
          </div>
          <div className="text-box">
            <h2>UNICESUMAR</h2>
            <small>2 anos e 6 meses</small>
            <span>Ads</span>
            <small>Florianópolis, SC</small>
            <p>Faculdade de Análise e Desenvolvimentos de Sistemas</p>
          </div>
        </div>

        <div className="container right-container">
          <div className="roundedContainer">
            <div className="rounded">
              <Code color="black" size={16} />
            </div>
            <span>2018 - 2023</span>
          </div>
          <div className="text-box dev">
            <h2>TT&T Soluções em informática</h2>
            <small>4 meses</small>
            <span>UX / UI Design</span>
            <span>Agile</span>
            <p>Trilhas de UX / UI, Scrum e Gestão Ágil. Desenv. do HiAdv</p>
          </div>
        </div>

        <div className="container left-container">
          <div className="roundedContainer">
            <div className="rounded">
              {' '}
              <Book color="black" size={16} />
            </div>
            <span>2023 - 2024</span>
          </div>
          <div className="text-box">
            <h2>Rocketseat Ignite</h2>
            <small>1 ano</small>
            <span>Curso</span>
            <span>React.js</span>
            <span>Front-end</span>
            <small>Florianópolis, SC</small>
            <p>
              Curso de Fullstack Design da EBAC, Escola Britânica de Artes e
              Tecnologia
            </p>
          </div>
        </div>

        <div className="container right-container">
          <div className="roundedContainer">
            <div className="rounded">
              <Code color="black" size={16} />
            </div>
            <span>2023 - 2023</span>
          </div>
          <div className="text-box dev">
            <h2>TT&T Soluções em informática</h2>
            <small>6 meses</small>
            <span>Front-end Developer</span>
            <span>Scrum Master</span>
            <p>Desenvolvimento do HiPizza plataforma de delivery de pizzas</p>
          </div>
        </div>
      </div>
    </TimelineContainer>
  )
}
