import styled from 'styled-components'

export const RadialBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: radial-gradient(circle at 10% 70%, #b9beff, transparent 20%),
    radial-gradient(circle at 70% 20%, #b9beff, transparent 30%),
    radial-gradient(circle at 30% 60%, #ffb6c1, transparent 70%),
    radial-gradient(circle at 10% 20%, #b9beff, transparent 40%),
    radial-gradient(circle at 30% 70%, #f4e499, transparent 30%),
    radial-gradient(circle at 70% 0%, #fff, transparent 40%),
    radial-gradient(circle at 100% 100%, #f4e499, transparent 40%),
    radial-gradient(circle at 50% 50%, #ff9999, transparent 70%);

  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.82;
  }
`

export const Content = styled.div`
  z-index: 2;
  position: relative;
  padding-top: 48px;
`
