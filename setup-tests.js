import 'react-native'
import 'jest-enzyme'
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import ThemeProvider from '~contexts/ThemeContext'
import constants from '~utils/constants'

const { THEMES } = constants

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
const { JSDOM } = require('jsdom')

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  })
}

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}
copyProps(window, global)

export const shallowWithTheme = (tree) => {
  const context = shallow(<ThemeProvider theme={THEMES.DEFAULT} />)
    .instance()
    .getChildContext()
  return shallow(tree, { context })
}

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({ adapter: new Adapter() })
