import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import BaseCardWrapper, { CardWrapperTitle, CardWrapperContent } from './style'

/**
 * CardWrapper
 * @desc ::: A wrapper for card
 *
 */
export default function CardWrapper(props) {
  const { children, onScroll, title, ...restProps } = props

  return (
    <BaseCardWrapper {...restProps}>
      <CardWrapperTitle>{title}</CardWrapperTitle>
      <CardWrapperContent onScroll={onScroll}>{children}</CardWrapperContent>
    </BaseCardWrapper>
  )
}

CardWrapper.defaultProps = {
  children: undefined,
  title: '',
  onScroll: () => null,
}
CardWrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  onScroll: PropTypes.func,
}
