import React from 'react'

/**
 * cardsReducer
 * @reducer
 *
 */
const cardsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        areCardsLoadable: true,
        cards: [...state.cards, ...action.cards],
        errors: [],
      }
    case 'FETCH_ERROR':
      return {
        ...state,
        areCardsLoadable: false,
        errors: [...state.errors]
          .filter((e) => e.message !== action.error.message)
          .concat(action.error),
      }
    default:
      return state
  }
}

/**
 * useCardsInfos
 * @hook
 * @desc :: manage card state
 *
 */
function useCardsInfos() {
  const [state, dispatch] = React.useReducer(cardsReducer, {
    cards: [],
    areCardsLoadable: false,
    errors: [],
  })

  const setSuccess = (cards) => {
    dispatch({ type: 'FETCH_SUCCESS', cards })
  }
  const setFailure = (error) => dispatch({ type: 'FETCH_ERROR', error })

  return React.useMemo(
    () => ({
      cards: state.cards,
      cardsErrors: state.errors,
      areCardsLoadable: state.areCardsLoadable,
      setCardsInfos(obj = {}) {
        const { cards, error } = obj
        if (error) {
          const err = error instanceof Error ? error : new Error(error)
          setFailure(err)
        }
        if (cards) setSuccess(cards)
      },
    }),
    [state],
  )
}

export default useCardsInfos
