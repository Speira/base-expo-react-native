import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import BaseButton, { ButtonText, ButtonWiew } from './style'

/**
 * Button
 * @component
 *
 */
function Button(props) {
  const { label, onPress } = props
  return (
    <ButtonWiew>
      <BaseButton onPress={onPress}>
        <ButtonText>{label}</ButtonText>
      </BaseButton>
    </ButtonWiew>
  )
}
Button.defaultProps = {
  onPress: () => null,
}
Button.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string.isRequired,
}

export default Button
