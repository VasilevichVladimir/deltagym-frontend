import { SidebarButton } from '../components/UI/userProfile/SidebarButton'
import { Routes, Route } from 'react-router-dom'
import { UserData } from '../components/userProfile/UserData'
import ExampleAvatar from '../images/ExampleAvatar.jpg'
import {
  UserProfileWrapper,
  LeftSide,
  Sidebar,
  UserCard,
  UserAvatar,
  UserName,
} from '../styles/userProfile/userProfile'

export const UserProfile = () => {
  return (
    <UserProfileWrapper>
      <LeftSide>
        <UserCard>
          <UserAvatar src={ExampleAvatar} />
          <UserName>Владимир</UserName>
        </UserCard>
        <Sidebar>
          <SidebarButton title='Мой профиль' link='/userProfile/userData' />
          <SidebarButton title='Смена пароля' link='/userProfile/userData' />
          <SidebarButton
            title='Журнал тренировок'
            link='/userProfile/userData'
          />
          <SidebarButton title='Избранное' link='/userProfile/userData' />
        </Sidebar>
      </LeftSide>
      <Routes>
        <Route path='/userData' element={<UserData />} />
      </Routes>
    </UserProfileWrapper>
  )
}
