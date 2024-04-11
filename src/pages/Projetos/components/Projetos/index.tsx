import { CardLinkContainer } from './styles'

interface Card {
  id: number
  title: string
  description: string
  technologies: string[]
  img: string
  link: string
}

interface CardProps {
  data: Card
}

export function Card({ data }: CardProps) {
  return (
    <CardLinkContainer to={data.link} target="_blank">
      <div>
        <main>
          <div className="title-wrap">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
          <div className="tech-wrap">
            {data.technologies.map((stacks) => {
              return <span key={stacks}>{stacks}</span>
            })}
          </div>
        </main>
        <aside>
          <img src={data.img} alt="" />
        </aside>
      </div>
    </CardLinkContainer>
  )
}
