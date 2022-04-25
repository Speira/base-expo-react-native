import { ActivityIndicator, Text, View } from 'react-native'
import styled from 'styled-components/native'

/**
 * BaseRequestWrapper
 * @component
 *
 */
export const RequestLoaderWrapper = styled(View)``

/**
 * BaseRequestWrapper
 * @component
 *
 */
export const RequestLoader = styled(ActivityIndicator).attrs(({ theme }) => ({
  size: 'large',
  color: theme.COLORS.DYNAMIC.INFO,
}))``

/**
 * BaseRequestWrapper
 * @component
 *
 */
export const RequestErrorWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DYNAMIC.DANGER};
  padding: 8px;
`

/**
 * BaseRequestWrapper
 * @component
 *
 */
export const RequestError = styled(Text)`
  color: ${({ theme }) => theme.COLORS.STATIC.LIGHT};
`

/**
 * BaseRequestWrapper
 * @component
 *
 */
const BaseRequestWrapper = styled(View)`
  flex: 1;
`
export default BaseRequestWrapper
