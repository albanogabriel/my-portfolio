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
  checked: boolean // Prop to indicate whether it's checked
  setCheckedItem: (title: string) => void // Setter function for checked item
}

export function LinkedParagraph({
  data,
  onClick,
  checked,
  setCheckedItem,
}: LinkedParagraphProps) {
  const [onHover, setOnHover] = useState(false)

  function handleGoToTheLink() {
    onClick(data.title)
    setCheckedItem(data.title)
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
        <InterestsNavLink className={checked ? 'checked' : ''}>
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
