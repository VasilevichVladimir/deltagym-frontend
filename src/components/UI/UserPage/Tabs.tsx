import { ReactElement, useState } from 'react'
import styled from 'styled-components'
import colors from '../../../constants/colors'
import TabTitle from './TabTitle'
import ExampleAvatar from '../../../images/ExampleAvatar.jpg'

type Props = {
  children: ReactElement[]
}

const Tabs = ({ children }: Props) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <TabsWrapper>
      <LeftSide>
        <AvatarWrapper>
          <Avatar src={ExampleAvatar} />
          <AvatarText>Владимир</AvatarText>
        </AvatarWrapper>
        <StyledUl>
          {children.map((item, index) => (
            <TabTitle
              key={index}
              title={item.props.title}
              index={index}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </StyledUl>
      </LeftSide>
      <RightSide>{children[selectedTab]}</RightSide>
    </TabsWrapper>
  )
}

const TabsWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

const LeftSide = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  background-color: ${colors.gray};
`

const RightSide = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  background-color: ${colors.white};
`

const StyledUl = styled.ul`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60%;
  margin: 0;
  padding: 0;
`
const Avatar = styled.img`
  width: 80%;
  border: 0.26vh solid ${colors.white};
  border-radius: 4%;
`

const AvatarText = styled.span`
  font-size: 100%;
  font-family: 'Montserrat-Bold';
  text-align: center;
  color: ${colors.white};
`

const AvatarWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 60%;
`

export default Tabs
