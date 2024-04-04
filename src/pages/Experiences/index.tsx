import { useState } from 'react'

import { ExperiencesContainer } from './styles'
import { TimelineAlltime } from './TimelineAllTime'

export function Experiences() {
  const [navIsActive, setNavIsActive] = useState('alltime')

  return (
    <ExperiencesContainer>
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
      {/* {navIsActive === 'frontend' && <TimelineFrontend />} */}
      {/* {navIsActive === 'marketing' && <TimelineMarketing />} */}
    </ExperiencesContainer>
  )
}
