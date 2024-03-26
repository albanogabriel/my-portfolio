import { ArrowArcLeft, ArrowRight } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { LinkButtonPrimary } from '../../components/LinkButtonPrimary'
import { BigTitle, PageContainer, SmallParagraph } from '../../styles/global'
import { ButtonContainer, HomeContainer, TextContainer } from './styles'
export function Home() {
  return (
    <PageContainer>
      <HomeContainer>
        <TextContainer>
          <div>
            <BigTitle>Olá,</BigTitle>
            <SmallParagraph>
              Me chamo <strong>Gabriel Albano.</strong> Desempenho o papel de{' '}
              <strong>Scrum Master</strong> em uma equipe de{' '}
              <strong>Desenvolvimento Front-end.</strong> Tenho formação em
              Publicidade Propaganda e atualmente iniciei a faculdade de ADS
              (Análise e Desenv. de Sistemas). Meu foco é <strong>React</strong>{' '}
              (Next.js)
            </SmallParagraph>
          </div>
          <span>
            <NavLink to="/about" title="About">
              Continuar lendo...
            </NavLink>
          </span>
        </TextContainer>
        <ButtonContainer>
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
        </ButtonContainer>
      </HomeContainer>
    </PageContainer>
  )
}
