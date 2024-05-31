import chileImg from '../../../../../assets/chile.jpg'
import { useAge } from '../../../../../hooks/useAge'
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
            <div>
              <p>
                <strong>Nome:</strong> Gabriel Albano da Silva{' '}
              </p>
              <p>
                <strong>Idade:</strong> {age}
              </p>
              <p>
                <strong>Nascimento:</strong> {birthDate}
              </p>
              <p>
                <strong>Cidade:</strong> Florianópolis
              </p>
            </div>
          </div>
          <ChileImg src={chileImg} alt="" />
          <div>
            <div>
              <p>
                Me graduei em 2022 em Publicidade e Propaganda através da
                faculdade UNISUL. Após significativas experiências profissionais
                no Marketing e UX / UI Design, decidi mudar a rota de minha vida
                profissional.
              </p>
              <br />
              <p>
                Para dar início nessa nova jornada focada em tecnologia me
                matriculei na faculdade de Análise e Desenvolvimento de
                Sistemas, com objetivo de abrir portas para o mercado de
                trabalho na área de Desenvolvimento Front-end através de um
                estágio. A faculdade também está me proporcionando conhecimentos
                fundamentais e base teórica sobre o universo de programação e
                tecnologia.
              </p>
              <br />
              <p>
                A escolha de minha faculdade foi centrada no custo-benefício:
                busquei a faculdade com melhor educação, didática e mensalidade
                acessível segundo reviews e feedback dos estudantes. Escolhi a
                UNICESUMAR com foco no objetivo de dar o primeiro passo nessa
                minha nova carreira.
              </p>
              <br />
              <p>
                Atualmente em meu estágio atuo como Scrum master em uma squad de
                desenvolvimento Front-End, onde estamos desenvolvendo o HiPizza,
                uma plataforma que conecta clientes e estabelecimentos que
                disponibilizam seus produtos dentro da plataforma.
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
                Tailwind, Framer Motion, SEO, Node, Java, Springboot)
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
