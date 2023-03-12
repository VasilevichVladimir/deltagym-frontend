import { CSSProperties, FC, HTMLAttributes } from 'react'
import styled from 'styled-components'
import colors from '../../../constants/colors'

interface InputProps {
  type?: string
  labelText: string
  style?: CSSProperties
}

export const Input: FC<InputProps & HTMLAttributes<HTMLInputElement>> = ({
  type,
  labelText,
  style,
}: InputProps) => {
  return (
    <div>
      <Label>{labelText}</Label>
      <StyledInput type={type} style={style} />
    </div>
  )
}

const Label = styled.label`
  font-size: 18px;
  font-family: 'Montserrat-Bold';
  color: ${colors.yellow};
`

const StyledInput = styled.input`
  display: block;
  width: 486.9px;
  margin-top: 5.25px;
  font-size: 18px;
  font-family: 'Montserrat-Bold';
  color: ${colors.gray};
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1.95px solid ${colors.inputBorder};
  outline: none;
`
