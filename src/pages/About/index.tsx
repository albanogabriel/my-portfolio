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
              UNISUL em 2022.
            </p>
            <br />
            <p>
              Após algumas experiências profissionais no Marketing e UX / UI
              Design, decidi mudar a rota de minha vida profissional me
              inscrevendo em uma faculdade focada em tecnologia para ingressar
              na área do Desenvolvimento Front-end.
            </p>
            <br />
            <p>
              A escolha de minha faculdade foi centrada no custo-benefício,
              busquei a faculdade com melhor educação, didática e mensalidade
              acessíveis segundo reviews e feedback de clientes que me
              entregassem uma boa teoria sobre tecnologia e programação. Escolhi
              a UNICESUMAR com foco no objetivo de dar o primeiro passo nessa
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
              end Development) / Metodologias Ágeis e SCRUM. Também desenvolo
              por conta própria projetos para me testar e consolidar meus
              aprendizados.
            </p>
            <br />
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
        <span>
          <a href="/">Voltar...</a>
        </span>
      </TextContainer>
    </PageContainer>
  )
}
