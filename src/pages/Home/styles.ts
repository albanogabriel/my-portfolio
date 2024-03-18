import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ButtonPrimary = styled.button`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  color: ${(props) => props.theme.color['gray-800']};
  background-color: ${(props) => props.theme.color['gray-050']};
  font-family: ${(props) => props.theme.fontFamilies.default};
  font-weight: 600;

  a {
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${(props) => props.theme.color['gray-900']};
    background-color: ${(props) => props.theme.color.white};
    /* box-shadow: ; */

    a {
      transform: translateX(40px);
    }
  }
`

export const ButtonSecundary = styled(ButtonPrimary)`
  color: ${(props) => props.theme.color['gray-800']};
`
