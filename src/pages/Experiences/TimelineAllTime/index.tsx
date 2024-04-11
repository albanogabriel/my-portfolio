import { Book, Code, GraduationCap, SuitcaseSimple } from 'phosphor-react'
import { useState } from 'react'

import { ProgressBar } from './ProgressBar'
import { TimelineContainer } from './styles'

export function TimelineAlltime() {
  const [react, setReact] = useState(false)
  // const [java, setJava] = useState(false)
  const [devOps, setDevOps] = useState(false)
  const [ebac, setEBAC] = useState(false)
  const [santanderX, setSantanderX] = useState(false)

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
            <ProgressBar progress={'100%'} />
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

        {/* EBAC - Full stack Design */}
        <div className="container left-container">
          <div className="roundedContainer">
            <div className="rounded">
              {' '}
              <Book color="black" size={16} />
            </div>
            <span>2022 - 2023</span>
          </div>
          <div className="text-box">
            <h2>Fullstack Design</h2>
            <small>11 meses</small>
            <p>EBAC - Escola Britânica de Artes e Tecnologia</p>

            {ebac === false && (
              <>
                <span>UX / UI</span>
                <span>Front-end</span>
                <span className="buttonSpan" onClick={() => setEBAC(true)}>
                  Ver + 22
                </span>
              </>
            )}

            {ebac && (
              <>
                <span>Curso</span>
                <span>UX / UI</span>
                <span>Front-end</span>
                <span>Design Thinking</span>
                <span>Atomic Design</span>
                <span>UX Research</span>
                <span>UX Writting</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>JQuery</span>
                <span>Bootstrap</span>
                <span>SASS</span>
                <span>Gulp</span>
                <span>Less</span>
                <span>Grunt</span>
                <span>E-mail</span>
                <span>Ajax</span>
                <span>ES6+</span>
                <span>TypeScript</span>
                <span>React</span>
                <span>Redux</span>
                <span>E2E Cypress</span>
                <span className="buttonSpan" onClick={() => setEBAC(false)}>
                  Fechar
                </span>
              </>
            )}
            <small>Florianópolis, SC</small>
            <ProgressBar progress={'100%'} />
          </div>
        </div>

        {/* UNICESUMAR - ADS */}
        <div className="container left-container">
          <div className="roundedContainer">
            <div className="rounded">
              {' '}
              <GraduationCap color="black" size={16} />
            </div>
            <span>2023 - 2024</span>
          </div>
          <div className="text-box">
            <h2>Análise e Desenvolvimento de Sistemas</h2>
            <p>UniCesumar</p>
            <small>2 anos e 6 meses</small>
            <span>Ads</span>
            <span>Graduação</span>
            <small>Florianópolis, SC</small>
            <ProgressBar progress={'23.1%'} />
          </div>
        </div>

        {/* Santander X Explorer */}
        <div className="container right-container">
          <div className="roundedContainer">
            <div className="rounded">
              <SuitcaseSimple color="black" size={16} />
            </div>
            <span>2023 - 2023</span>
          </div>
          <div className="text-box work">
            <h2>Projeto incubado Santander X</h2>
            <p>Santander X Explorer</p>
            <small>3 meses</small>

            {santanderX === false && (
              <>
                <span>Empreendedorismo</span>
                <span>Pitch</span>
                <span>MVP</span>
                <span
                  className="buttonSpan"
                  onClick={() => setSantanderX(true)}
                >
                  Ver + 4
                </span>
              </>
            )}

            {santanderX && (
              <>
                <span>Empreendedorismo</span>
                <span>Pitch</span>
                <span>MVP</span>
                <span>Research</span>
                <span>Storytelling</span>
                <span>Negócios</span>
                <span>Plataforma</span>
                <span
                  className="buttonSpan"
                  onClick={() => setSantanderX(false)}
                >
                  Fechar
                </span>
              </>
            )}
          </div>
        </div>

        {/* TT&T - UX / UI Design */}
        <div className="container right-container">
          <div className="roundedContainer">
            <div className="rounded">
              <Code color="black" size={16} />
            </div>
            <span>2023 - 2023</span>
          </div>
          <div className="text-box dev">
            <h2>UX / UI Designer</h2>
            <p>TT&T Soluções em informática</p>
            <small>4 meses</small>
            <span>UX / UI Design</span>
            <span>Agile</span>
            <span>SCRUM</span>
            <small>São Paulo, SP</small>
          </div>
        </div>

        {/* CURSO - React Rocketseat */}
        <div className="container left-container">
          <div className="roundedContainer">
            <div className="rounded">
              {' '}
              <Book color="black" size={16} />
            </div>
            <span>2023 - 2024</span>
          </div>
          <div className="text-box">
            <h2>ReactJS</h2>
            <p>Rocketseat</p>
            <small>1 ano</small>

            {react === false && (
              <>
                <span>React.js</span>
                <span>Front-end</span>
                <span
                  className="buttonSpan"
                  onClick={() => {
                    setReact(true)
                  }}
                >
                  ver + 11
                </span>
              </>
            )}

            {react && (
              <>
                <span>React.js</span>
                <span>Front-end</span>
                <span>Next</span>
                <span>Tailwind</span>
                <span>Storybook</span>
                <span>VITE</span>
                <span>TypeScript</span>
                <span>Styled-Components</span>
                <span>ZOD</span>
                <span>useForm</span>
                <span>Stitches</span>
                <span>Turborepo</span>
                <span>ESLint</span>
                <span
                  className="buttonSpan"
                  onClick={() => {
                    setReact(false)
                  }}
                >
                  Fechar
                </span>
              </>
            )}
            <small>Florianópolis, SC</small>
            <ProgressBar progress={'65%'} />
          </div>
        </div>

        {/* TT&T - Front End Developer */}
        <div className="container right-container">
          <div className="roundedContainer">
            <div className="rounded">
              <Code color="black" size={16} />
            </div>
            <span>2023 - 2024</span>
          </div>
          <div className="text-box dev">
            <h2>Front-end Developer</h2>
            <p>TT&T Soluções em informática</p>
            <small>6 meses</small>
            <span>Front-end</span>
            <span>Scrum Master</span>
            <span>Gestão Ágil</span>
            <small>São Paulo, SP</small>
          </div>
        </div>

        {/* CURSO - DevOps */}
        <div className="container left-container">
          <div className="roundedContainer">
            <div className="rounded">
              {' '}
              <Book color="black" size={16} />
            </div>
            <span>2023 - 2024</span>
          </div>
          <div className="text-box">
            <h2>DevOps</h2>
            <p>Rocketseat</p>
            <small>1 ano</small>

            {devOps === false && (
              <>
                <span>Cultura DevOps</span>
                <span>Fundamentos</span>
                <span
                  className="buttonSpan"
                  onClick={() => {
                    setDevOps(true)
                  }}
                >
                  ver + 10
                </span>
              </>
            )}

            {devOps && (
              <>
                <span>Cultura DevOps</span>
                <span>Fundamentos</span>
                <span>CALMS</span>
                <span>Containers</span>
                <span>Docker Compose</span>
                <span>IAC</span>
                <span>AWS</span>
                <span>GCP</span>
                <span>CI / CD</span>
                <span>Kubernets</span>

                <span
                  className="buttonSpan"
                  onClick={() => {
                    setDevOps(false)
                  }}
                >
                  Fechar
                </span>
              </>
            )}
            <small>Florianópolis, SC</small>
            <ProgressBar progress={'10%'} />
          </div>
        </div>

        {/* CURSO - JAVA */}
        {/* <div className="container left-container">
          <div className="roundedContainer">
            <div className="rounded">
              {' '}
              <Book color="black" size={16} />
            </div>
            <span>2023 - 2024</span>
          </div>
          <div className="text-box">
            <h2>Java</h2>
            <p>Rocketseat</p>
            <small>1 ano</small>

            {java === false && (
              <>
                <span>React.js</span>
                <span>Front-end</span>
                <span
                  className="buttonSpan"
                  onClick={() => {
                    setJava(true)
                  }}
                >
                  ver + 10
                </span>
              </>
            )}

            {java && (
              <>
                <span>React.js</span>
                <span>Front-end</span>
                <span>Storybook</span>
                <span>VITE</span>
                <span>TypeScript</span>
                <span>Styled-Components</span>
                <span>ZOD</span>
                <span>useForm</span>
                <span>Stitches</span>
                <span>Turborepo</span>
                <span>Next</span>
                <span>ESLint</span>
                <span
                  className="buttonSpan"
                  onClick={() => {
                    setRocketseat(false)
                  }}
                >
                  Fechar
                </span>
              </>
            )}
            <small>Florianópolis, SC</small>
            <ProgressBar progress={'2%'} />
          </div>
        </div> */}
      </div>
    </TimelineContainer>
  )
}
