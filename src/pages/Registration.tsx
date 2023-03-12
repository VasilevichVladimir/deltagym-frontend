import dumbbell from '../images/dumbbell.png'
import Icon from '../components/UI/Icon'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI/registration/Button'
import { Input } from '../components/UI/registration/Input'
import {
  RegistrationWrapper,
  LeftSide,
  LogoWrapper,
  LogoName,
  LogoFooter,
  ContactWrapper,
  ContactText,
  RightSide,
  LinkText,
  Text,
  Image,
} from '../styles/registration/registration'

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
            marginRight: '307.2px',
          }}
        >
          ВРЕМЯ БЫТЬ
          <br /> В ФОРМЕ!
        </Text>
        <Image src={dumbbell} />
        <ContactWrapper style={{ marginBottom: '5.25px' }}>
          <Icon icon='clock' size={15} />
          <ContactText>Работаем ежедневно: с 8:00 до 21:00</ContactText>
        </ContactWrapper>
        <ContactWrapper style={{ marginBottom: '5.25px' }}>
          <Icon icon='location2' size={15} />
          <ContactText>Г. Минск, ул. Прушинских 88, 3 этаж</ContactText>
        </ContactWrapper>
        <ContactWrapper>
          <Icon icon='phone' size={15} />
          <ContactText>+375 44 123-78-56</ContactText>
        </ContactWrapper>
      </LeftSide>
      <RightSide>
        <Text style={{ marginBottom: '30px' }}>РЕГИСТРАЦИЯ</Text>
        <Input labelText='Имя' style={{ marginBottom: '41.25px' }} />
        <Input labelText='Фамилия' style={{ marginBottom: '41.25px' }} />
        <Input labelText='Логин' style={{ marginBottom: '41.25px' }} />
        <Input
          labelText='Пароль'
          type='password'
          style={{ marginBottom: '41.25px' }}
        />
        <Input
          labelText='Повторите пароль'
          type='password'
          style={{ marginBottom: '41.25px' }}
        />
        <Link to='/userProfile'>
          <Button text='ЗАРЕГИСТРИРОВАТЬСЯ' />
        </Link>
        <Link
          style={{ textDecoration: 'none', marginTop: '45px' }}
          to='/authorization'
        >
          <LinkText
            style={{
              borderBottom: 'solid 1.5px',
            }}
          >
            Уже есть аккаунт? Авторизируйтесь
          </LinkText>
        </Link>
      </RightSide>
    </RegistrationWrapper>
  )
}
