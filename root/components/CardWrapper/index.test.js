import React from 'react'
import { shallow } from 'enzyme'
import constants from '~utils/constants'
import CardWrapper from './index'
import BaseCardWrapper, { CardWrapperTitle, CardWrapperContent } from './style'

const { THEMES } = constants

describe('render CardWrapper', () => {
  const onScroll = jest.fn()
  const wrapper = shallow(
    <CardWrapper title="test" onScroll={onScroll} theme={THEMES.DEFAUL}>
      test
    </CardWrapper>,
  )
  it('CardWrapper should be defined', () => {
    expect(wrapper).toBeDefined()
  })
  it('CardWrapper should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('CardWrapper should have CardWrapperContent', () => {
    const content = wrapper.find(CardWrapperContent)
    expect(onScroll).not.toHaveBeenCalled()
    content.simulate('scroll')
    expect(onScroll).toHaveBeenCalled()
  })
})
