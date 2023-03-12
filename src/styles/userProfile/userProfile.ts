import styled from "styled-components"
import colors from "../../constants/colors"

export const UserProfileWrapper = styled.div`
  display: flex;
  width: 1536px;
  height: 749.8px;
`

export const LeftSide = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 303.8px;
  height: 749.8px;
  background-color: ${colors.gray};
`

export const Sidebar = styled.ul`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 303.8px;
  height: 449.8px;
  margin: 0;
  padding: 0;
`

export const UserAvatar = styled.img`
  width: 156px;
  border: 1.95px solid ${colors.white};
  border-radius: 5px;
`

export const UserName = styled.span`
  font-size: 18px;
  font-family: 'Montserrat-Bold';
  text-align: center;
  color: ${colors.white};
`

export const UserCard = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 183px;
  margin-bottom: 50px;
`