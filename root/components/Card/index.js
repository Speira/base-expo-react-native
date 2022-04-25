import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'

import BaseCard, {
  CardBody,
  CardBodyImage,
  CardFooter,
  CardHeader,
  CardText,
} from './style'

/**
 * Card
 * @desc ::: create a layout for the qpp
 *
 */
export default function Card(props) {
  const { title, url, ...restProps } = props
  return (
    <BaseCard {...restProps}>
      <CardHeader>
        <CardText>{title}</CardText>
      </CardHeader>
      <CardBody>
        <CardBodyImage source={url} resizeMode="cover" />
      </CardBody>
      <CardFooter />
    </BaseCard>
  )
}
Card.defaultProps = {
  title: '',
  url: '',
}
Card.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
}
