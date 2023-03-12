import styled from 'styled-components'
import colors from '../../../constants/colors'
import { FC, HTMLAttributes } from 'react'

interface ButtonProps {
  text: string
}

export const Button: FC<ButtonProps & HTMLAttributes<HTMLButtonElement>> = ({
  text,
}: ButtonProps) => {
  return <StyledButton>{text}</StyledButton>
}

const StyledButton = styled.button`
  height: 56.25px;
  padding-left: 59.9px;
  padding-right: 59.9px;
  font-size: 18px;
  font-family: 'Montserrat-Bold';
  text-align: center;
  color: ${colors.white};
  background-color: ${colors.yellow};
  border: none;
  box-shadow: 0px 3.75px 3.75px ${colors.shadow};
  :hover {
    background-color: ${colors.gray};
  }
  transition-duration: 0.4s;
`
