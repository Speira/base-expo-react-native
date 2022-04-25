import React from 'react'

import { useStorage } from '~contexts/StorageContext'
import { useAPI } from '~contexts/APIContext'
import constants from '~utils/constants'

import Button from '~components/Button'
import Layout from '~components/Layout'
import Card from '~components/Card'
import CardWrapper from '~components/CardWrapper'
import RequestWrapper from '~components/RequestWrapper'

const { LABELS, API, STATES } = constants

/**
 * homeReducer
 * @reducer
 *
 */
const homeReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, cards: action.cards, isLoading: false, errors: [] }
    case 'FETCH_ERROR':
      return {
        ...state,
        errors: [...state.errors, action.error],
        isLoading: false,
      }
    case 'START_LOADING':
      return { ...state, isLoading: true }
    default:
      return state
  }
}

/**
 * HomeContainer
 * @container
 * @desc :: Homepage
 *
 */
function HomeContainer() {
  const {
    clearStorageCards,
    fetchStorageCards,
    hasDatabase,
    insertStorageCards,
  } = useStorage()
  const { fetchAPICards } = useAPI()
  const [state, dispatch] = React.useReducer(homeReducer, {
    cards: [],
    isLoading: false,
    errors: [],
  })

  const setSuccess = (cards) => {
    dispatch({ type: 'FETCH_SUCCESS', cards })
  }

  const setFailure = (error) => {
    dispatch({ type: 'FETCH_ERROR', error })
  }
  const syncData = async () => {
    dispatch({ type: 'START_LOADING' })
    try {
      const found = await fetchStorageCards()
      if (found && found.length) return setSuccess(found)
      const fetched = await fetchAPICards({ proxy: API.PROXY })
      const inserted = await insertStorageCards(fetched)
      if (inserted.length) return setSuccess(inserted)
      setFailure(new Error(LABELS.NO_RESPONSE_DATA))
    } catch (err) {
      setFailure(err)
    }
  }

  React.useEffect(() => {
    if (hasDatabase) syncData()
    else {
      dispatch({ type: 'START_LOADING' })
    }
  }, [hasDatabase])

  return (
    <Layout title={LABELS.WELCOME}>
      <RequestWrapper isLoading={state.isLoading} errors={state.errors}>
        <CardWrapper title={LABELS.LIST}>
          {state.cards.map((item) => (
            <Card key={item.id} title={item.title} />
          ))}
        </CardWrapper>
      </RequestWrapper>
      <Button label={LABELS.CLEAR_DATABASE} onPress={clearStorageCards} />
    </Layout>
  )
}

export default HomeContainer
