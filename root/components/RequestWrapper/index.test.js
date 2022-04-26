import React from 'react'
import { shallow } from 'enzyme'
import constants from '~utils/constants'
import RequesWrapper from './index'

import BaseRequestWrapper, {
  RequestError,
  RequestErrorWrapper,
  RequestLoader,
  RequestLoaderWrapper,
} from './style'

const { THEMES } = constants

describe('render RequesWrapper', () => {
  const wrapper = shallow(
    <RequesWrapper errors={[]} isLoading theme={THEMES.DEFAULT}>
      test
    </RequesWrapper>,
  )
  test('RequesWrapper should be defined', () => {
    expect(wrapper).toBeDefined()
  })
  test('RequesWrapper should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('RequesWrapper should have RequestLoader displayed ', () => {
    const loading = wrapper.find(RequestLoader)
    expect(loading).toHaveLength(1)
  })
  test('RequesWrapper can have RequestError displayed ', () => {
    let error = wrapper.find(RequestError)
    expect(error).toHaveLength(0)
    wrapper.setProps({ errors: [{ message: 'test' }], isLoading: false })
    error = wrapper.find(RequestError)
    expect(error).toHaveLength(1)
  })
  test('RequesWrapper can have the Request displayed ', () => {
    let request = wrapper.find(BaseRequestWrapper)
    expect(request).toHaveLength(0)
    wrapper.setProps({ errors: [] })
    request = wrapper.find(BaseRequestWrapper)
    expect(request).toHaveLength(1)
  })
})
