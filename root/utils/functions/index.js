// utils/functions
// description: All functions go here

/**
 * default function
 * @param {Any} element
 *
 */
export default function (element = '') {
  return element
}

export { withProxy, withParams } from './decorators'

/**
 * checkScrollEnd
 * @desc: detect if a scroll event is close to the end
 *
 * @param {NativeEvent} nativeEvent
 * @return {Boolean}
 *
 */
export const checkScrollEnd = (nativeEvent) => {
  const { layoutMeasurement, contentOffset, contentSize } = nativeEvent
  const isEnd =
    layoutMeasurement.height + contentOffset.y >= contentSize.height - 20
  return isEnd
}
