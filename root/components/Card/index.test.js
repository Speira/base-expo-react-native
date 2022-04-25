import React from 'react'
import renderer from 'react-test-renderer'
import Card from './index'

test('render Card', () => {
  const tree = renderer.create(<Card title="test" />).toJSON()
  expect(tree).toMatchSnapshot()
})
