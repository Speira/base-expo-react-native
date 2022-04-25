import React from 'react'
import renderer from 'react-test-renderer'
import CardWrapper from './index'

test('render CardWrapper', () => {
  const tree = renderer
    .create(<CardWrapper title="test">test</CardWrapper>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
