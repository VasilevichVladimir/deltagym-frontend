import { CSSProperties } from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

interface InputProps {
  type?: string
  labelText: string
  style?: CSSProperties
}

export const Input = ({ labelText, type, style }: InputProps) => {
  return (
    <div>
      <Label>{labelText}</Label>
      <StyledInput type={type} style={style} />
    </div>
  )
}

const Label = styled.label`
  font-size: 2.4vh;
  font-family: 'Montserrat-Bold';
  color: ${colors.yellow};
`
const StyledInput = styled.input`
  display: block;
  width: 65vh;
  margin-top: 0.7vh;
  font-size: 2.4vh;
  font-family: 'Montserrat-Bold';
  color: ${colors.textGray};
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 0.26vh solid ${colors.inputBorder};
  outline: none;
`
