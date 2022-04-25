import React from 'react'
import renderer from 'react-test-renderer'
import Layout from './index'

test('render Layout', () => {
  const tree = renderer.create(<Layout title="test">test</Layout>).toJSON()
  expect(tree).toMatchSnapshot()
})
