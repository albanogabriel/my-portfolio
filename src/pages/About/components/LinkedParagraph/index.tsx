import { ArrowSquareRight, ArrowSquareUpRight } from 'phosphor-react'
import { useState } from 'react'

import { HoverScreenContainer, InterestsNavLink, ParagraphLink } from './styles'

interface Data {
  id: number
  link: string
  title: string
  coverImg: string
}

interface LinkedParagraphProps {
  data: Data
  onClick: (param: string) => void
}

export function LinkedParagraph({ data, onClick }: LinkedParagraphProps) {
  const [onHover, setOnHover] = useState(false)

  function handleGoToTheLink() {
    onClick(data.title)
  }

  return (
    <ParagraphLink
      key={data.id}
      onClick={handleGoToTheLink}
      onMouseOver={() => {
        setOnHover(true)
      }}
      onMouseOut={() => {
        setOnHover(false)
      }}
    >
      <div>
        <InterestsNavLink>
          <p>{data.title} </p>
          <div>
            {onHover ? (
              <div>
                <ArrowSquareUpRight size={15} />
              </div>
            ) : (
              <ArrowSquareRight size={15} />
            )}
          </div>
          {onHover && (
            <HoverScreenContainer>
              <span>
                <img src={data.coverImg} alt="" />
              </span>
              <div>
                <h1>{data.title}</h1>
              </div>
            </HoverScreenContainer>
          )}
        </InterestsNavLink>
      </div>
    </ParagraphLink>
  )
}
