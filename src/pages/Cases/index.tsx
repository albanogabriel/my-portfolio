import { cases } from '../../lib/data'
import { BigTitle } from '../../styles/global'
import { Card } from './components/Card'
import { CardContainer, CasesPageContainer } from './styles'

export function Cases() {
  return (
    <CasesPageContainer>
      <BigTitle>Cases</BigTitle>

      <CardContainer>
        {cases.map((card) => {
          return <Card key={card.id} data={card} />
        })}
      </CardContainer>
    </CasesPageContainer>
  )
}
