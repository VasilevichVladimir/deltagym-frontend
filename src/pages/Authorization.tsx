import dumbbell from '../images/dumbbell.png'
import Icon from '../components/UI/Icon'
import { Link } from 'react-router-dom'
import {
  LeftSide,
  RightSide,
  LogoName,
  Text,
  LinkText,
  Image,
  LogoFooter,
  LogoWrapper,
  ContactWrapper,
  ContactText,
  RegistrationWrapper,
  Button,
  Input,
} from '../components/UI/Registration/RegistrationComponents'

export const Authorization = () => {
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
        <Text style={{ marginBottom: '8vh' }}>АВТОРИЗАЦИЯ</Text>
        <Input labelText='Логин' style={{ marginBottom: '5.5vh' }} />
        <Input
          labelText='Пароль'
          type='password'
          style={{ marginBottom: '5.5vh' }}
        />
        <Button text='ВОЙТИ' />
        <Link
          style={{ textDecoration: 'none', marginTop: '6vh' }}
          to='/registration'
        >
          <LinkText
            style={{
              borderBottom: 'solid 0.2vh',
            }}
          >
            Нет аккаунта? Зарегистрируйтесь
          </LinkText>
        </Link>
      </RightSide>
    </RegistrationWrapper>
  )
}
