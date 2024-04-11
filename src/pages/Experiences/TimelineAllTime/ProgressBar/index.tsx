import { Progress, ProgressBarBackground, ProgressBarContainer } from './styles'

interface ProgressBarProps {
  progress: string
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <ProgressBarContainer>
      <ProgressBarBackground>
        <Progress progress={progress}></Progress>
      </ProgressBarBackground>
      <div>{progress}</div>
    </ProgressBarContainer>
  )
}
