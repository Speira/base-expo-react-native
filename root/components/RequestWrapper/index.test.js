import React from 'react'
import renderer from 'react-test-renderer'
import RequestWrapper from './index'

test('render RequestWrapper', () => {
  const tree = renderer
    .create(
      <RequestWrapper errors={['test']} isLoading>
        test
      </RequestWrapper>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
