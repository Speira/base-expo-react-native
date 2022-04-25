import styled from 'styled-components/native'
import { TouchableOpacity, Text, View } from 'react-native'

/**
 * CardHeader
 * @component
 *
 */
export const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.COLORS.STATIC.LIGHT};
`

/**
 * ButtonWiew
 * @component
 *
 */
export const ButtonWiew = styled(View)`
  justify-content: center;
  padding: 10px;
`
/**
 * BaseButton
 * @component
 *
 */
const BaseButton = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DYNAMIC.WARNING};
  padding: 10px;
`
export default BaseButton
