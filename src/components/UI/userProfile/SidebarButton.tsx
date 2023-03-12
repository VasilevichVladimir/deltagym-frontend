import { FC, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../../constants/colors'

type ButtonProps = {
  title: string
  link: string
}

export const SidebarButton: FC<
  ButtonProps & HTMLAttributes<HTMLButtonElement>
> = ({ title, link }: ButtonProps) => {
  return (
    <ButtonWrapper>
      <Link to={link}>
        <Button>{title}</Button>
      </Link>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.li`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 273.4px;
  height: 86.9px;
  margin-bottom: 15px;
  user-select: none;
  list-style: none;
`

const Button = styled.button`
  width: 273.4px;
  height: 86.9px;
  font-size: 18px;
  font-family: 'Montserrat-Bold';
  text-align: center;
  color: ${colors.white};
  background-color: ${colors.yellow};
  border: none;
  :hover {
    background-color: ${colors.white};
    color: ${colors.gray};
  }
  :focus {
    background-color: ${colors.white};
    color: ${colors.gray};
  }
  transition-duration: 0.4s;
`
