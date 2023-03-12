import IcoMoon, { IconProps } from 'react-icomoon'
import iconSet from '../../assets/selection.json'
import colors from '../../constants/colors'

const Icon = ({ icon, color, size }: IconProps) => (
  <IcoMoon
    iconSet={iconSet}
    icon={icon}
    color={color || colors.yellow}
    size={size || 24}
  />
)

export default Icon
