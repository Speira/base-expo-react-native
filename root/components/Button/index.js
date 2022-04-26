import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import constants from '~utils/constants'
import BaseButton, { ButtonText, ButtonWiew } from './style'

const { STATUS } = constants

/**
 * Button
 * @component
 *
 */
function Button(props) {
  const { hide, label, onPress, status } = props
  return hide ? null : (
    <ButtonWiew>
      <BaseButton onPress={onPress} status={status}>
        <ButtonText>{label}</ButtonText>
      </BaseButton>
    </ButtonWiew>
  )
}
Button.defaultProps = {
  hide: false,
  onPress: () => null,
  status: STATUS.INFO,
}
Button.propTypes = {
  hide: PropTypes.bool,
  onPress: PropTypes.func,
  label: PropTypes.string.isRequired,
  status: PropTypes.oneOf(Object.values(STATUS)),
}

export default Button
