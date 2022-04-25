import React from 'react'
import PropTypes from 'prop-types'

import * as SQLite from 'expo-sqlite'
import constants from '~utils/constants'

const { INVALID_DATA_FORMAT, LABELS, STORAGE_ITEMS } = constants
const StorageContext = React.createContext()

const tableName = 'cardItems'

/**
 * StorageProvider
 * @context
 * @desc ::: Persist data locally using mongodb
 *  -findAll: fetch all the data to the local database
 *  -insert: insert the data(Array) passed to the database
 *  -clear: Remove all the data
 *
 */
function StorageProvider({ children }) {
  const [db, setDb] = React.useState(null)
  const [hasDatabase, setDatabaseState] = React.useState(false)
  const [databaseError, setDatabaseError] = React.useState('')

  const initConnection = async () => {
    // enablePromise(true)
    try {
      const initDb = await SQLite.openDatabase(
        STORAGE_ITEMS.CARD,
        '1.0.0',
        'card items database',
      )
      setDb(initDb)
      const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        id INT, title TEXT NOT NULL, url TEXT NOT NULL);`
      console.log('##initDb', initDb)
      initDb.transaction((tx) =>
        tx.executeSql(query, [], () => {
          setDatabaseError('')
          setDatabaseState(true)
        }),
      )
    } catch (err) {
      setDatabaseError(err)
      setDatabaseState(true)
    }
  }

  const executeQuery =
    ({ resolve, reject, query }) =>
    (transaction) => {
      transaction.executeSql(
        query,
        [],
        (itself, result) => {
          resolve(Array.from(result.rows))
        },
        (itself, err) => {
          reject(err.error)
        },
      )
    }

  const value = {
    hasDatabase,
    fetchStorageCards() {
      return new Promise(async (resolve, reject) => {
        if (databaseError) return reject(databaseError)

        if (!db) return reject(new Error(LABELS.NO_DATABASE))
        try {
          const query = `SELECT id, title, url  FROM ${tableName}`
          db.readTransaction(executeQuery({ query, resolve, reject }))
        } catch (err) {
          reject(err)
        }
      })
    },
    insertStorageCards(cards) {
      return new Promise(async (resolve, reject) => {
        if (databaseError) return reject(databaseError)
        if (!db) return reject(new Error(LABELS.NO_DATABASE))
        if (!cards.length) return reject(new Error(LABELS.NO_CARD))
        try {
          const query =
            `INSERT OR REPLACE INTO ${tableName}(id, title,url) values` +
            cards.map((i) => `(${i.id}, '${i.title}', '${i.url}')`).join(',')
          db.transaction(executeQuery({ query, resolve, reject }))
        } catch (err) {
          reject(err)
        }
      })
    },
    async clearStorageCards() {
      if (!db) throw Error(LABELS.NO_DATABASE)
      const query = `drop table ${tableName}`
      db.transaction((tx) => tx.executeSql(query))
    },
  }

  React.useEffect(async () => {
    initConnection()
    return () => db && db.close()
  }, [])

  return (
    <StorageContext.Provider value={value}>{children}</StorageContext.Provider>
  )
}
StorageProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
/**
 * useStorage
 * @return context
 *
 */
export const useStorage = () => {
  const context = React.useContext(StorageContext)
  if (!context)
    throw new Error('StorageContext must be called in StorageProvider')
  return context
}
export default StorageProvider
