import styled from 'styled-components/native'
import { SafeAreaView as View } from 'react-native-safe-area-context'
import { StatusBar, Text } from 'react-native'

/**
 * LayoutStatusBar
 * @component
 *
 */
export const LayoutStatusBar = styled(StatusBar).attrs(({ theme }) => ({
  barStyle: 'default',
  backgroundColor: theme.COLORS.STATIC.DARK,
}))``

/**
 * LayoutTitle
 * @component
 *
 */
export const LayoutTitle = styled(Text)`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.STATIC.DARK};
`
/**
 * LayoutHeader
 * @component
 *
 */
export const LayoutHeader = styled(View)`
  flex: 0.12;
`
/**
 * LayoutBody
 * @component
 *
 */
export const LayoutBody = styled(View)`
  flex: 0.76;
  justify-content: space-between;
`
/**
 * LayoutFooter
 * @component
 *
 */
export const LayoutFooter = styled(View)`
  flex: 0.1;
`

/**
 * BaseLayout
 * @component
 *
 */
const BaseLayout = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.STATIC.PRIMARY};
  padding-top: 10px;
`

export default BaseLayout
