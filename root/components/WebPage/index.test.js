import React from 'react'
import renderer from 'react-test-renderer'
import WebPage from './index'

test('render WebPage', () => {
  const tree = renderer.create(<WebPage uri="http://test.com" />).toJSON()
  expect(tree).toMatchSnapshot()
})
