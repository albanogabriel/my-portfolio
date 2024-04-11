import chileImg from '../../../../../assets/Captura de Tela 2024-04-10 às 15.59.50.jpg'
import { useAge } from '../../../../../components/hooks/useAge'
import { BigTitle } from '../../../../../styles/global'
import { Section } from '../../../styles'
import { ChileImg, SmallParagraphStyled } from './styles'

export function AboutMe() {
  const { age, birthDate } = useAge()

  return (
    <Section>
      <div>
        <BigTitle>Sobre Mim</BigTitle>
        <SmallParagraphStyled>
          <div>
            <h3>Dados demográficos</h3>
            <div>
              <p>Nome: Gabriel Albano da Silva </p>
              <p>Idade: {age}</p>
              <p>Nascimento: {birthDate}</p>
              <p>Cidade: Florianópolis</p>
            </div>
          </div>
          <ChileImg src={chileImg} alt="" />
          <div>
            <h3>Jornada</h3>
            <div>
              <p>
                Sou graduado em Publicidade e Propaganda através da faculdade
                UNISUL em 2022. Após algumas experiências profissionais no
                Marketing e UX / UI Design, decidi mudar a rota de minha vida
                profissional
              </p>
              <br />
              <p>
                Para o início dessa nova jornada focada em tecnologia escolhi
                fazer a faculdade de Análise e Desenvolvimento de Sistemas. O
                objetivo é abrir portas através de um estágio para o mercado de
                trabalho na área de Desenvolvimento Front-end. O faculdade
                também me proporciona conhecimentos fundamentais e base teórica
                sobre o universo de programação e tecnologia.
              </p>
              <br />
              <p>
                A escolha de minha faculdade foi centrada no custo-benefício:
                busquei a faculdade com melhor educação, didática e mensalidade
                acessível segundo reviews e feedback dos estudantes. Escolhi a
                UNICESUMAR com foco no objetivo de dar o primeiro passo nessa
                minha nova carreira
              </p>
              <br />
              <p>
                Atualmente em meu estágio atuo como Scrum master em uma squad de
                desenvolvimento Front-End, onde estamos desenvolvendo o HiPizza,
                uma plataforma que conecta clientes que possuem o desejo de
                comer pizza no conforto de sua casa e estabelecimentos que
                querem conectar seus produtos ao clientes.
              </p>
              <br />
              <p>
                Para me especilizar fiz os cursos: Rocketseat Ignite(React JS,
                Figma para Devs) / EBAC Full Stack Design(UX / UI Design e Front
                end Development) / Metodologias Ágeis e SCRUM.
              </p>
              <br />
              <p>
                Também desenvolvo projetos pessoais por conta própria para me
                desafiar e consolidar meus aprendizados.
              </p>
              <p>
                Em um futuro próximo almejo fazer os cursos de: (React Native,
                Tailwind, Framer Motion, SEO, Node, Java, Sprintboot)
              </p>
              <br />
              <p>
                Atualmente busco me aperfeiçoar como um profissional de
                desenvolvimento focado no front-end. Desejo conseguir minha
                primeira vaga para crescer profissionalmente, sendo capaz de
                resolver problemas reais demandado pelo mercado, contribuindo
                assim, para a organização na qual estou inserido.
              </p>
            </div>
          </div>
        </SmallParagraphStyled>
      </div>
    </Section>
  )
}
