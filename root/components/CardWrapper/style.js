import styled from 'styled-components/native'
import { Text, View, ScrollView } from 'react-native'

/**
 * CardWrapperTitle
 * @component
 *
 */
export const CardWrapperTitle = styled(Text)`
  flex: 0.1;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.STATIC.DARK};
  text-align: center;
`
/**
 * CardWrapperContent
 * @component
 *
 */
export const CardWrapperContent = styled(ScrollView).attrs(() => ({
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  },
}))`
  flex: 0.9;
  margin: 0 10px 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.STATIC.TERTIARY};
  padding: 4px;
`
/**
 * BaseCardWrapper
 * @component
 *
 */
const BaseCardWrapper = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.STATIC.SECONDARY};
  padding-top: 30px;
`

export default BaseCardWrapper
