import { CSSProperties } from 'react'
import styled from 'styled-components'
import colors from '../../../constants/colors'

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
  transition-duration: 0.4s;
`

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
  width: 31.7vw;
  margin-top: 0.7vh;
  font-size: 2.4vh;
  font-family: 'Montserrat-Bold';
  color: ${colors.gray};
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 0.26vh solid ${colors.inputBorder};
  outline: none;
`

export const RegistrationWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

export const RightSide = styled.div`
  z-index: 2;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  background-color: ${colors.white};
`

export const LeftSide = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  background-color: ${colors.gray};
`

export const Text = styled.span`
  font-size: 5vh;
  font-family: 'Montserrat-Black';
  color: ${colors.gray};
  text-align: center;
`

export const LinkText = styled.span`
  font-size: 2vh;
  font-family: 'Montserrat-Bold';
  color: ${colors.gray};
  text-align: center;
  :hover {
    color: ${colors.yellow};
  }
`

export const Image = styled.img`
  width: 29.6vw;
  height: auto;
  margin-left: 30vw;
  margin-bottom: 10vh;
`

export const LogoName = styled.span`
  font-size: 7vh;
  font-family: 'Montserrat-BlackItalic';
  color: ${colors.white};
  text-align: center;
  border-bottom: solid 0.6vh ${colors.yellow};
  margin: 0;
`

export const LogoFooter = styled.span`
  font-size: 1.7vh;
  font-family: 'Montserrat-Bold';
  color: ${colors.white};
  text-align: center;
  margin: 0;
`

export const LogoWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 8vh;
  margin-top: 3vh;
`

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ContactText = styled.span`
  font-size: 2vh;
  font-family: 'Montserrat-Bold';
  color: ${colors.white};
  margin-left: 0.5vw;
`
