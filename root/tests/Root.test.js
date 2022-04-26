import React from 'react'
import { shallow } from 'enzyme'
import Root from '../index'

describe('render Root', () => {
  const wrapper = shallow(<Root />)
  it('Root should be defined', () => {
    expect(wrapper).toBeDefined()
  })
})
