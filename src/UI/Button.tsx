import styled from 'styled-components'
import colors from '../constants/colors'

interface ButtonProps {
  text: string
}

export const Button = ({ text }: ButtonProps) => {
  return <StyledButton>{text}</StyledButton>
}

const StyledButton = styled.button`
  height: 7.5vh;
  padding-left: 3.9vw;
  padding-right: 3.9vw;
  font-size: 2.4vh;
  font-family: 'Montserrat-Bold';
  text-align: center;
  color: ${colors.white};
  background-color: ${colors.yellow};
  border: none;
  box-shadow: 0vh 0.5vh 0.5vh ${colors.shadow};
  :hover {
    background-color: ${colors.gray};
  }
`
