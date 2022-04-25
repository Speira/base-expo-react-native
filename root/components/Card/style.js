import styled from 'styled-components/native'
import { View, Text } from 'react-native'

/**
 * CardHeader
 * @component
 *
 */
export const CardHeader = styled(View)`
  flex: 1;
  justify-content: center;
  padding: 0 8px;
`
/**
 * CardBody
 * @component
 *
 */
export const CardBody = styled(View)`
  flex: 4;
  padding: 4px;
  justify-content: center;
`
/**
 * CardFooter
 * @component
 *
 */
export const CardFooter = styled(View)`
  flex: 1;
  padding: 4px;
  justify-content: center;
`
/**
 * CardText
 *
 */
export const CardText = styled(Text)`
  color: ${({ theme }) => theme.COLORS.STATIC.DARK};
  flex-wrap: wrap;
`
/**
 * BaseCard
 * @component
 *
 */
const BaseCard = styled(View)`
  height: 300px;
  width: 300px;
  background-color: ${({ theme }) => theme.COLORS.STATIC.QUATERNARY};
  border-radius: 4px;
  padding: 4px;
  text-align: center;
  shadow-color: ${({ theme }) => theme.COLORS.STATIC.DARK};
  shadow-offset: {width: 1, height: 2};
  shadow-opacity: 0.6;
  shadow-radius: 4px;
  margin: 8px 16px;
`
export default BaseCard
