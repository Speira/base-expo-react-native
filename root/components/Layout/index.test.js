import React from 'react'
import { shallow } from 'enzyme'
import constants from '~utils/constants'
import Layout from './index'
import BaseLayout, { LayoutTitle } from './style'

const { THEMES } = constants

describe('render Layout', () => {
  const wrapper = shallow(
    <Layout title="test" theme={THEMES.DEFAULT}>
      test
    </Layout>,
  )
  it('Layout should be defined', () => {
    expect(wrapper).toBeDefined()
  })
  it('Layout should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('Layout should have a LayoutTitle', () => {
    const title = wrapper.find(LayoutTitle)
    expect(title.text()).toEqual('test')
  })
})
