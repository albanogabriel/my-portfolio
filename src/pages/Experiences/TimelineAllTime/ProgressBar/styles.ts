import styled from 'styled-components'

export const ProgressBarContainer = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  width: 100%;
`
export const ProgressBarBackground = styled.div`
  height: 4px;
  background-color: ${(props) => props.theme.color['gray-400']};
  width: 100%;
  border-radius: 2px;
`

interface ProgressProps {
  progress: string
}

export const Progress = styled.div<ProgressProps>`
  border-radius: 2px;
  height: 4px;
  background-color: ${(props) => props.theme.color['gray-050']};
  width: ${(props) => props.progress};
`
