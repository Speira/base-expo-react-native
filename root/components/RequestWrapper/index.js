import PropTypes from 'prop-types'
import BaseRequestWrapper, {
  RequestError,
  RequestErrorWrapper,
  RequestLoader,
  RequestLoaderWrapper,
} from './style'

/**
 * RequestWrapper
 * @component
 * @desc ::: Manage request display
 *
 */
function RequestWrapper(props) {
  const { children, isLoading, errors } = props
  if (isLoading)
    return (
      <RequestLoaderWrapper>
        <RequestLoader />
      </RequestLoaderWrapper>
    )
  if (errors.length) {
    return (
      <RequestErrorWrapper>
        {errors.map((err, id) => (
          <RequestError key={id}>{err.message}</RequestError>
        ))}
      </RequestErrorWrapper>
    )
  }
  return <BaseRequestWrapper>{children}</BaseRequestWrapper>
}
RequestWrapper.defaultProps = {
  children: undefined,
  errors: {},
}
RequestWrapper.propTypes = {
  children: PropTypes.node,
  errors: PropTypes.arrayOf(PropTypes.any),
  isLoading: PropTypes.bool.isRequired,
}
export default RequestWrapper
