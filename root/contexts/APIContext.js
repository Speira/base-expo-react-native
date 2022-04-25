import React from 'react'
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
 *         params {String} options.proxy
 *         params {Object} options.params
 *         params {Number} options.timeout
 *         @return {Promise}
 *
 */
function APIProvider(props) {
  const [isRequesting, setRequestingState] = React.useState(false)

  const fetchAPICards = (options = {}) => {
    let uri = API.FETCH_DATA_URL
    let timeoutId = null
    const fetchOptions = []
    if (options.proxy) uri = withProxy(options.proxy)(uri)
    if (options.params) uri = withParams(options.params)(uri)
    if (options.timeout) {
      const controller = new AbortController()
      timeoutId = setTimeout(() => controller.abort(), options.timeout)
      fetchOptions.signal = controller.signal
    }
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(uri, fetchOptions)
        if (timeoutId) clearTimeout(timeoutId)
        if (!response.ok) {
          return reject(new Error(LABELS.SEARCH_DATA_FAILED))
        }
        resolve(await response.json())
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
