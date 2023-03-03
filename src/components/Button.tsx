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
  padding-left: 8vh;
  padding-right: 8vh;
  font-size: 2.4vh;
  font-family: 'Montserrat-Bold';
  text-align: center;
  color: ${colors.textWhite};
  background-color: ${colors.yellow};
  border: none;
  box-shadow: 0vh 0.5vh 0.5vh ${colors.shadow};
`
