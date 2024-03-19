import { ArrowArcLeft, ArrowRight } from 'phosphor-react'

import { LinkButtonPrimary } from '../../components/LinkButtonPrimary'
import { BigTitle, PageContainer, SmallParagraph } from '../../styles/global'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <PageContainer>
      <HomeContainer>
        <div>
          <BigTitle>Olá,</BigTitle>

          <SmallParagraph>
            Me chamo Gabriel Albano. Atuo como Scrum Master em squad de
            desenvolvimento Front-end. Sou formado em Publicidade Propaganda e
            estou cursando a faculdade de ADS (Análise e Desenv. de Sistemas).
            Meu foco é React (Next.js)
          </SmallParagraph>
        </div>

        <LinkButtonPrimary
          to={'https://bit.ly/3QKhXU0'}
          target="_blank"
          width="350px"
        >
          Entre em contato
          <ArrowRight />
        </LinkButtonPrimary>

        <LinkButtonPrimary
          to={
            'https://docs.google.com/document/d/1EoO4NyKV-_W4P3hVuKSCVHJFE_bVZlRCiJ7BzlVxKNc/edit#heading=h.58egdng8y2vt'
          }
          target="_blank"
          width="350px"
          variant="secundary"
        >
          Curriculum Vitae
          <ArrowArcLeft />
        </LinkButtonPrimary>
      </HomeContainer>
    </PageContainer>
  )
}
