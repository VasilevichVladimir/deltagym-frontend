import styled from 'styled-components'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import colors from '../constants/colors'

export const Registration = () => {
  return (
    <RegistrationWrapper>
      <LeftSide />
      <RightSide>
        <Text>РЕГИСТРАЦИЯ</Text>
        <Input labelText='Имя' style={{ marginBottom: '5.5vh' }} />
        <Input labelText='Фамилия' style={{ marginBottom: '5.5vh' }} />
        <Input labelText='Логин' style={{ marginBottom: '5.5vh' }} />
        <Input
          labelText='Пароль'
          type='password'
          style={{ marginBottom: '5.5vh' }}
        />
        <Input
          labelText='Повторите пароль'
          type='password'
          style={{ marginBottom: '5.5vh' }}
        />
        <Button text='ЗАРЕГИСТРИРОВАТЬСЯ' />
        <Text
          style={{
            fontSize: '2vh',
            fontFamily: 'Montserrat-Bold',
            marginTop: '6vh',
            borderBottom: 'solid 0.2vh',
          }}
        >
          Уже есть аккаунт? Авторизируйтесь
        </Text>
      </RightSide>
    </RegistrationWrapper>
  )
}

const RegistrationWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100vw;
  height: 100vh;
`

const RightSide = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  background-color: white;
`

const LeftSide = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: blue;
`
const Text = styled.p`
  font-size: 5vh;
  font-family: 'Montserrat-Black';
  color: ${colors.textGray};
  text-align: center;
`
