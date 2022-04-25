import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import BaseCardWrapper, { CardWrapperTitle, CardWrapperContent } from './style'

/**
 * CardWrapper
 * @desc ::: A wrapper for card
 *
 */
export default function CardWrapper(props) {
  const { children, title } = props

  return (
    <BaseCardWrapper>
      <CardWrapperTitle>{title}</CardWrapperTitle>
      <CardWrapperContent>{children}</CardWrapperContent>
    </BaseCardWrapper>
  )
}

CardWrapper.defaultProps = {
  children: undefined,
  title: '',
}
CardWrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}
