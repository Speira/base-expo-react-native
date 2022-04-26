import React from 'react'
import { shallow } from 'enzyme'
import constants from '~utils/constants'
import Button from './index'

const { THEMES } = constants

describe('render Button', () => {
  const wrapper = shallow(<Button label="test" theme={THEMES.DEFAULT} />)
  it('Button should be defined', () => {
    expect(wrapper).toBeDefined()
  })
  it('Button should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
