import styled from "styled-components"
import colors from "../../constants/colors"

export const RegistrationWrapper = styled.div`
  display: flex;
  width: 1536px;
  height: 749.8px;
`

export const RightSide = styled.div`
  z-index: 2;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 749.8px;
  background-color: ${colors.white};
`

export const LeftSide = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 749.8px;
  background-color: ${colors.gray};
`

export const Text = styled.span`
  font-size: 37.5px;
  font-family: 'Montserrat-Black';
  color: ${colors.gray};
  text-align: center;
`

export const LinkText = styled.span`
  font-size: 15px;
  font-family: 'Montserrat-Bold';
  color: ${colors.gray};
  text-align: center;
  :hover {
    color: ${colors.yellow};
  }
`

export const Image = styled.img`
  width: 454.6px;
  height: auto;
  margin-left: 460.8px;
  margin-bottom: 75px;
`

export const LogoName = styled.span`
  font-size: 52.5px;
  font-family: 'Montserrat-BlackItalic';
  color: ${colors.white};
  text-align: center;
  border-bottom: solid 4.5px ${colors.yellow};
  margin: 0;
`

export const LogoFooter = styled.span`
  font-size: 12.75px;
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
  margin-bottom: 60px;
  margin-top: 22.5px;
`

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ContactText = styled.span`
  font-size: 15px;
  font-family: 'Montserrat-Bold';
  color: ${colors.white};
  margin-left: 7.68px;
`
