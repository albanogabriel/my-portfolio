import { useState } from 'react'

import { ExperiencesContainer } from './styles'
import { TimelineAlltime } from './TimelineAllTime'
import { TimelineEducacao } from './TimelineEducacao'
import { TimelineProfissional } from './TimelineProfissional'

export function Experiences() {
  const [navIsActive, setNavIsActive] = useState('educacao')

  return (
    <ExperiencesContainer>
      <nav>
        <span
          className={navIsActive === 'educacao' ? 'active' : ''}
          onClick={() => setNavIsActive('educacao')}
        >
          Educação
        </span>
        <span
          className={navIsActive === 'profissional' ? 'active' : ''}
          onClick={() => setNavIsActive('profissional')}
        >
          Profissional
        </span>
        <span
          className={navIsActive === 'alltime' ? 'active' : ''}
          onClick={() => setNavIsActive('alltime')}
        >
          All time
        </span>
      </nav>
      {navIsActive === 'educacao' && <TimelineEducacao />}
      {navIsActive === 'profissional' && <TimelineProfissional />}
      {navIsActive === 'alltime' && <TimelineAlltime />}
    </ExperiencesContainer>
  )
}
