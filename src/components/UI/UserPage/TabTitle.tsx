import styled from 'styled-components'
import colors from '../../../constants/colors'

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle = ({ title, setSelectedTab, index }: Props) => {
  return (
    <TabTitleWrapper>
      <Button onClick={() => setSelectedTab(index)}>{title}</Button>
    </TabTitleWrapper>
  )
}

const TabTitleWrapper = styled.li`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 90%;
  height: 20%;
  margin-bottom: 2%;
  user-select: none;
  list-style: none;
`

const Button = styled.button`
  width: 100%;
  height: 98%;
  font-size: 2.4vh;
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

export default TabTitle
