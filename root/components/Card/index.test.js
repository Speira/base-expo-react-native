import React from 'react'
import { shallow } from 'enzyme'
import constants from '~utils/constants'
import Card from './index'

const { THEMES } = constants

describe('render Card', () => {
  const wrapper = shallow(<Card title="test" theme={THEMES.DEFAULT} />)
  it('Card should be defined', () => {
    expect(wrapper).toBeDefined()
  })
  it('Card should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
