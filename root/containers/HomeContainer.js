import React from 'react'

import { useStorage } from '~contexts/StorageContext'
import { useAPI } from '~contexts/APIContext'
import constants from '~utils/constants'
import { checkScrollEnd } from '~utils/functions'
import { useCardsInfos } from '~hooks'

import Button from '~components/Button'
import Card from '~components/Card'
import CardWrapper from '~components/CardWrapper'
import Layout from '~components/Layout'
import RequestWrapper from '~components/RequestWrapper'
import WebPage from '~components/WebPage'

const { API, LABELS, STATES, STATUS } = constants
const { WARNING } = STATUS

/**
 * HomeContainer
 * @container
 * @desc :: Homepage
 *
 */
function HomeContainer() {
  const { fetchStorageCards, hasDatabase, insertStorageCards } = useStorage()
  const { fetchAPICards } = useAPI()
  const { cards, areCardsLoadable, cardsErrors, setCardsInfos } =
    useCardsInfos()
  const [isLoading, setLoadingState] = React.useState(true)

  const syncData = async () => {
    try {
      const found = await fetchStorageCards({ start: cards.length })
      if (found && found.length) return setCardsInfos({ cards: found })
      const fetched = await fetchAPICards({ withCorsProxy: true })
      const inserted = await insertStorageCards(fetched)
      if (inserted.length) return setCardsInfos({ cards: inserted })
      setCardsInfos({ error: new Error(LABELS.NO_RESPONSE_DATA) })
    } catch (err) {
      setCardsInfos({ error: err })
    }
  }

  const onEndScroll = async ({ nativeEvent }) => {
    const isScrollEnd = checkScrollEnd(nativeEvent)
    if (!isScrollEnd) return null
    const found = await fetchStorageCards({ start: cards.length })
    if (found.length) {
      setCardsInfos({ cards: found })
    }
  }

  const needProxyCheck = cardsErrors.some(
    (e) => e.message === LABELS.SEARCH_DATA_FAILED,
  )

  React.useEffect(() => {
    if (hasDatabase) syncData()
  }, [hasDatabase])

  React.useEffect(() => {
    if (areCardsLoadable || cardsErrors.length) setLoadingState(false)
  }, [areCardsLoadable, cardsErrors.length])

  return (
    <Layout title={LABELS.WELCOME}>
      <RequestWrapper isLoading={isLoading} errors={cardsErrors}>
        <CardWrapper title={LABELS.LIST} onScroll={onEndScroll}>
          {cards.map((item) => (
            <Card key={item.id} title={item.title} url={item.url} />
          ))}
        </CardWrapper>
      </RequestWrapper>
      <WebPage hide={!needProxyCheck} uri={API.PROXY.NO_CORS_SERVER} />
      <Button
        label={LABELS.REFETCH_DATA}
        onPress={syncData}
        hide={!needProxyCheck}
      />
    </Layout>
  )
}

export default HomeContainer
