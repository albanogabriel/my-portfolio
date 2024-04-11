import styled from 'styled-components'

import { SmallParagraph } from '../../../../../styles/global'

export const ChileImg = styled.img`
  width: 400px;
  filter: grayscale(50%);
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color['gray-200']};
`

export const SmallParagraphStyled = styled(SmallParagraph)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
