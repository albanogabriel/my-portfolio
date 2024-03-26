import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Lists } from '../../lib/data'
import { LinkedParagraph } from './components/LinkedParagraph'
import { AboutMe } from './components/Pages/AboutMe'
import { Animes } from './components/Pages/Animes'
import { Filmes } from './components/Pages/Filmes'
import { Games } from './components/Pages/Games'
import { Livros } from './components/Pages/Livros'
import { Series } from './components/Pages/Series'
import { AboutPageContainer, LinkAboutMe } from './styles'

export function About() {
  const [section, setSection] = useState('')
  const [navIsChecked, setNavIsChecked] = useState('')

  function onSectionChildChange(param: string) {
    setSection(param)
  }

  return (
    <AboutPageContainer>
      <nav>
        <span
          onClick={() => {
            setSection('')
            setNavIsChecked('')
          }}
          className={navIsChecked === '' ? 'checked' : ''}
        >
          Sobre Mim
        </span>
        <span
          onClick={() => {
            setSection('Livros')
            setNavIsChecked('Livros')
          }}
        >
          Livros
        </span>
        <span
          onClick={() => {
            setSection('Filmes')
            setNavIsChecked('Filmes')
          }}
        >
          Filmes
        </span>
        <span
          onClick={() => {
            setSection('Series')
            setNavIsChecked('Series')
          }}
        >
          Séries
        </span>
        <span
          onClick={() => {
            setSection('Filmes')
            setNavIsChecked('Filmes')
          }}
        >
          Animes
        </span>
        <span
          onClick={() => {
            setSection('Games')
            setNavIsChecked('Games')
          }}
        >
          Games
        </span>
      </nav>

      <section>
        <div className="section-area">
          {section === '' && <AboutMe />}
          {section === 'Livros' && <Livros />}
          {section === 'Filmes' && <Filmes />}
          {section === 'Series' && <Series />}
          {section === 'Animes' && <Animes />}
          {section === 'Games' && <Games />}
        </div>

        <div className="stickyMenu">
          <div className="h2-div">
            {' '}
            <h2>Info</h2>
          </div>
          <div className="age-wrapper">
            <h3>Sobre mim</h3>
            <LinkAboutMe onClick={() => setSection('')}>
              Resumo(Sobre mim)
            </LinkAboutMe>
          </div>

          <div className="interest-wrapper">
            <h3>Listas / Rankings</h3>
            <div>
              {Lists.map((link) => {
                return (
                  <LinkedParagraph
                    key={link.id}
                    data={link}
                    onClick={onSectionChildChange}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <span>
        <NavLink to="/">Voltar...</NavLink>
      </span>
      <footer></footer>
    </AboutPageContainer>
  )
}
