import Tabs from '../components/UI/UserPage/Tabs'
import Tab from '../components/UI/UserPage/Tab'

export const UserPage = () => {
  return (
    <>
      <Tabs>
        <Tab title='Мой профиль'>Lemon is yellow</Tab>
        <Tab title='Смена пароля'>Strawberry is red</Tab>
        <Tab title='Журнал тренировок'>qwerty</Tab>
        <Tab title='Избранное'>В разработке</Tab>
      </Tabs>
    </>
  )
}
