/**
 * withProxy
 * @decorator
 * @return the uri with the proxy given
 *
 */
export const withProxy = (proxy) => (urlStr) => `${proxy}${urlStr}`

/**
 * withParams
 * @decorator
 * @return the uri with parameters converted to string
 *
 */
export const withParams = (params) => (uri) => {
  const res = Object.entries(params).reduce(
    (acc, cur, index) => `${acc}${index !== 0 ? '&' : ''}${cur[0]}=${cur[1]}`,
    `${uri}?`,
  )
  return res
}
