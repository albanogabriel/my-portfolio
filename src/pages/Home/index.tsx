import { ArrowRight } from 'phosphor-react'

import { BigTitle, PageContainer, SmallParagraph } from '../../styles/global'
import { ButtonPrimary, HomeContainer } from './styles'

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

        <ButtonPrimary to="/">
          <a href="/">
            Entre em contato
            <ArrowRight />
          </a>
        </ButtonPrimary>
      </HomeContainer>
    </PageContainer>
  )
}
