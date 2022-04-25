import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'

import BaseCard, { CardHeader, CardBody, CardText, CardFooter } from './style'

/**
 * Card
 * @desc ::: create a layout for the qpp
 *
 */
export default function Card(props) {
  const { title, ...restProps } = props
  return (
    <BaseCard {...restProps}>
      <CardHeader>
        <CardText>{title}</CardText>
      </CardHeader>
      <CardBody />
      <CardFooter />
    </BaseCard>
  )
}
Card.defaultProps = {
  title: '',
}
Card.propTypes = {
  title: PropTypes.string,
}
