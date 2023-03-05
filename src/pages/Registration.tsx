import styled from 'styled-components'
import { Input } from '../UI/Input'
import { Button } from '../UI/Button'
import colors from '../constants/colors'
import dumbbell from '../images/dumbbell.png'
import Icon from '../components/Icon'
import { Link } from 'react-router-dom'

export const Registration = () => {
  return (
    <RegistrationWrapper>
      <LeftSide>
        <LogoWrapper>
          <LogoName>DeltaGym</LogoName>
          <LogoFooter>ТРЕНАЖЕРНЫЙ ЗАЛ</LogoFooter>
        </LogoWrapper>
        <Text
          style={{
            color: 'white',
            textAlign: 'left',
            marginRight: '20vw',
          }}
        >
          ВРЕМЯ БЫТЬ
          <br /> В ФОРМЕ!
        </Text>
        <Image src={dumbbell} />
        <ContactWrapper style={{ marginBottom: '0.7vh' }}>
          <Icon icon='clock' size={15} />
          <ContactText>Работаем ежедневно: с 8:00 до 21:00</ContactText>
        </ContactWrapper>
        <ContactWrapper style={{ marginBottom: '0.7vh' }}>
          <Icon icon='location2' size={15} />
          <ContactText>Г. Минск, ул. Прушинских 88, 3 этаж</ContactText>
        </ContactWrapper>
        <ContactWrapper>
          <Icon icon='phone' size={15} />
          <ContactText>+375 44 123-78-56</ContactText>
        </ContactWrapper>
      </LeftSide>
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
        <Link
          style={{ textDecoration: 'none', marginTop: '6vh' }}
          to='/authorization'
        >
          <LinkText
            style={{
              borderBottom: 'solid 0.2vh',
            }}
          >
            Уже есть аккаунт? Авторизируйтесь
          </LinkText>
        </Link>
      </RightSide>
    </RegistrationWrapper>
  )
}

const RegistrationWrapper = styled.div`
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
