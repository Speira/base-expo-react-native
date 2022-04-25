/**
 * @jest-environment jsdom
 */
import React from 'react'
import { shallow } from 'enzyme'
import HomeContainer from '~containers/HomeContainer'
import Layout from '~components/Layout'
import RequestWrapper from '~components/RequestWrapper'
import Button from '~components/Button'
import * as storageContext from '~contexts/StorageContext'
import * as apiContext from '~contexts/APIContext'

describe('HomeContainer test', () => {
  const storageMock = {
    clearStorageCards: jest.fn(),
    fetchStorageCards: jest.fn(),
    hasDatabase: true,
    insertStorageCards: jest.fn(),
  }
  jest.spyOn(storageContext, 'useStorage').mockReturnedValue(storageMock)
  const apiMock = {
    fetchAPICards: jest.fn(),
  }
  jest.spyOn(apiContext, 'useAPI').mockReturnedValue(apiMock)

  const wrapper = shallow(<HomeContainer />)
  test('HomeContainer should be defined', () => {
    expec(wrapper).toBeDefined()
  })
  test('HomeContainer should have Layout', () => {
    expec(wrapper.find(Layout)).toHaveLength(1)
  })
  test('HomeContainer should have RequestWrapper', () => {
    const requestWrapper = wrapper.find(RequestWrapper)
    expec(requestWrapper).toHaveLength(1)
    expect(requestWrapper.prop('errors')).toHaveLength(0)
    expect(requestWrapper.prop('isLoading')).toBeTruthy()
  })
  test('HomeContainer should have reset Button', () => {
    const resetButton = wrapper.find(Button)
    expec(wrapper.find(resetButton)).toHaveLength(1)
    expect(apiContext.clearStorageCards).no.toHaveBeenCalled()
    button.onPress()
    expect(apiContext.clearStorageCards).toHaveBeenCalled()
  })
})
