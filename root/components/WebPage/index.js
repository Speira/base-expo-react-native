import React from 'react'
import PropTypes from 'prop-types'
import BaseWebPage from './style'

/**
 * WebPage
 * @component
 * @desc ::: View for Web
 *
 */
function WebPage(props) {
  const { hide, uri } = props
  return hide ? null : <BaseWebPage source={{ uri }} />
}
WebPage.defaultProps = {
  hide: false,
}
WebPage.propTypes = {
  hide: PropTypes.bool,
  uri: PropTypes.string.isRequired,
}

export default WebPage
