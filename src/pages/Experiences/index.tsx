import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { ExperiencesContainer } from './styles'
import { TimelineFrontend } from './Timeline Frontend'
import { TimelineAlltime } from './TimelineAllTime'
import { TimelineMKT } from './TimelineMKT'

export function Experiences() {
  const [navIsActive, setNavIsActive] = useState('alltime')

  return (
    <ExperiencesContainer>
      <Helmet title="Experiences" />
      <nav>
        <span
          className={navIsActive === 'alltime' ? 'active' : ''}
          onClick={() => setNavIsActive('alltime')}
        >
          All time
        </span>
        <span
          className={navIsActive === 'frontend' ? 'active' : ''}
          onClick={() => setNavIsActive('frontend')}
        >
          Frontend
        </span>
        <span
          className={navIsActive === 'marketing' ? 'active' : ''}
          onClick={() => setNavIsActive('marketing')}
        >
          Marketing
        </span>
      </nav>
      {navIsActive === 'alltime' && <TimelineAlltime />}
      {navIsActive === 'frontend' && <TimelineFrontend />}
      {navIsActive === 'marketing' && <TimelineMKT />}
    </ExperiencesContainer>
  )
}
