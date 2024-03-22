import { ArrowSquareRight, ArrowSquareUpRight } from 'phosphor-react'
import { useState } from 'react'

import { InterestsNavLink, ParagraphLink } from './styles'

interface Data {
  id: number
  link: string
  interest: string
}

interface LinkedParagraphProps {
  data: Data
}

export function LinkedParagraph({ data }: LinkedParagraphProps) {
  const [onHover, setOnHover] = useState(false)

  return (
    <ParagraphLink
      key={data.id}
      onMouseOver={() => {
        setOnHover(true)
      }}
      onMouseOut={() => {
        setOnHover(false)
      }}
    >
      <InterestsNavLink to={data.link} target="_blank">
        <p>{data.interest} </p>
        <div>
          {onHover ? (
            <ArrowSquareUpRight size={15} />
          ) : (
            <ArrowSquareRight size={15} />
          )}
        </div>
      </InterestsNavLink>
    </ParagraphLink>
  )
}
