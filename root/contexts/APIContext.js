import React from 'react'
import axios from 'axios'
import { withProxy, withParams } from '~utils/functions'
import constants from '~utils/constants'

const { API, FETCH_DATA_URL, LABELS } = constants

const APIContext = React.createContext()

/**
 * APIProvider
 * @component
 * @context
 * @desc ::: Provide API for the app
 * @return
 *     - isAPIRequesting {Boolean}
 *     - fetchAPICards
 *         params {Object} options
 *         params {Boolean} options.withCorsProxy | set a proxy
 *         params {Object} options.params | send request with params
 *         params {Number} options.timeout | timeout before cancel
 *         @return {Promise}
 *
 */
function APIProvider(props) {
  const [isRequesting, setRequestingState] = React.useState(false)

  const fetchAPICards = (options = {}) => {
    let uri = API.FETCH_DATA_URL
    let timeoutId = null
    const fetchOptions = []
    if (options.withCorsProxy)
      fetchOptions.proxy = { host: API.PROXY.NO_CORS_SERVER }
    if (options.params) uri = withParams(options.params)(uri)
    if (options.timeout) {
      const controller = new AbortController()
      timeoutId = setTimeout(() => controller.abort(), options.timeout)
      fetchOptions.signal = controller.signal
    }
    return new Promise((resolve, reject) => {
      try {
        axios
          .get(uri, fetchOptions)
          .then((response) => {
            if (!(response.data && response.data.length)) {
              return reject(new Error(LABELS.SEARCH_DATA_FAILED))
            }
            resolve(response.data)
          })
          .catch((err) => {
            reject(err)
          })
      } catch (err) {
        reject(err)
      }
    })
  }

  const value = {
    isAPIRequesting: isRequesting,
    fetchAPICards,
  }

  return <APIContext.Provider {...props} value={value} />
}

/**
 * useAPI
 * @return context
 *
 */
export const useAPI = () => {
  const context = React.useContext(APIContext)
  if (!context) throw new Error('APIContext must be called in APIProvider')
  return context
}
export default APIProvider
