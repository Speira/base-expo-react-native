/**
 * @jest-environment jsdom
 */
import React from 'react'
import { shallow } from 'enzyme'
import HomeContainer from '~containers/HomeContainer'
import Layout from '~components/Layout'
import RequestWrapper from '~components/RequestWrapper'
import WebPage from '~components/WebPage'
import * as storageContext from '~contexts/StorageContext'
import * as apiContext from '~contexts/APIContext'

describe('HomeContainer test', () => {
  const storageMock = {
    clearStorageCards: jest.fn(),
    fetchStorageCards: jest.fn(),
    hasDatabase: true,
    insertStorageCards: jest.fn(),
  }
  jest.spyOn(storageContext, 'useStorage').mockReturnValue(storageMock)
  const apiMock = {
    fetchAPICards: jest.fn(),
  }
  jest.spyOn(apiContext, 'useAPI').mockReturnValue(apiMock)

  const wrapper = shallow(<HomeContainer />)
  test('HomeContainer should be defined', () => {
    expect(wrapper).toBeDefined()
  })
  test('HomeContainer should have Layout', () => {
    expect(wrapper.find(Layout)).toHaveLength(1)
  })
  test('HomeContainer should have a WebPage Component', () => {
    const webPage = wrapper.find(WebPage)
    expect(webPage).toHaveLength(1)
    expect(webPage.prop('hide')).toBeTruthy()
  })

  test('HomeContainer should have RequestWrapper', () => {
    const requestWrapper = wrapper.find(RequestWrapper)
    expect(requestWrapper).toHaveLength(1)
    expect(requestWrapper.prop('errors')).toHaveLength(0)
    expect(requestWrapper.prop('isLoading')).toBeTruthy()
  })
})
