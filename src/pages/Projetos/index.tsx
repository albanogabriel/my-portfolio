import { Helmet } from 'react-helmet-async'

import { cases } from '../../lib/data'
import { BigTitle } from '../../styles/global'
import { Card } from './components/Projetos'
import { CardContainer, CasesPageContainer } from './styles'

export function Projetos() {
  return (
    <CasesPageContainer>
      <Helmet title="Projetos" />
      <BigTitle>Projetos</BigTitle>

      <CardContainer>
        {cases.map((card) => {
          return <Card key={card.id} data={card} />
        })}
      </CardContainer>
    </CasesPageContainer>
  )
}
