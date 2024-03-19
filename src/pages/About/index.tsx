import { NavLink } from 'react-router-dom'

import { BigTitle, PageContainer, SmallParagraph } from '../../styles/global'
import { TextContainer } from './styles'

export function About() {
  return (
    <PageContainer>
      <TextContainer>
        <div>
          <BigTitle>Sobre Mim</BigTitle>
          <SmallParagraph>
            <p>
              Sou graduado em Publicidade e Propaganda através da faculdade
              UNISUL em 2022. Após algumas experiências profissionais no
              Marketing e UX / UI Design, decidi mudar a rota de minha vida
              profissional
            </p>
            <br />
            <p>
              Para o início dessa nova jornada focada em tecnologia escolhi
              fazer a faculdade de Análise e Desenvolvimento de Sistemas com o
              objetivo de ingressar no mercado de trabalho da área do
              Desenvolvimento Front-end e que me entregassem uma boa teoria
              sobre tecnologia e programação.
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
              Atualmente atuo como Scrum master uma squad de desenvolvimento
              Front-End, onde estamos desenvolvendo o HiPizza, uma plataforma
              que conecta clientes que possuem o desejo de comer pizza no
              conforto de sua casa e estabelecimentos que querem conectar seus
              produtos ao clientes.
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
              E em futuro próximo almejo fazer os cursos de: React Native,
              (Tailwind, Framer Motion, SEO, Node, Java, Sprintboot)
            </p>
            <br />
            <p>
              Atualmente busco me aperfeiçoar como um profissional de
              desenvolvimento focado no front-end. Desejo conseguir minha
              primeira vaga para crescer profissionalmente, sendo capaz de
              resolver problemas reais demandado pelo mercado, contribuindo
              assim, para a organização na qual estou inserido.
            </p>
          </SmallParagraph>
        </div>
        {/* <span>
          <a href="/">Voltar...</a>
        </span> */}
        <span>
          <NavLink to="/">Voltar...</NavLink>
        </span>
      </TextContainer>
    </PageContainer>
  )
}
