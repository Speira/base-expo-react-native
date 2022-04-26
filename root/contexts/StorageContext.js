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
    try {
      const initDb = await SQLite.openDatabase(
        STORAGE_ITEMS.CARD,
        '1.0.0',
        'card items database',
      )
      setDb(initDb)
      const query = `CREATE TABLE IF NOT EXISTS ${tableName}
        (id INT, title TEXT NOT NULL, url TEXT NOT NULL)`
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

  const value = {
    hasDatabase,
    fetchStorageCards(params = {}) {
      const start = params.start || 0
      const limit = params.limit || 8
      return new Promise(async (resolve, reject) => {
        if (databaseError) return reject(databaseError)

        if (!db) return reject(new Error(LABELS.NO_DATABASE))
        try {
          const query = `SELECT id, title, url  FROM ${tableName} LIMIT ${start}, ${limit}`
          const onSuccess = (itself, result) => resolve(result.rows._array)
          const onError = (itself, err) => reject(err)
          await db.readTransaction((tr) =>
            tr.executeSql(query, [], onSuccess, onError),
          )
        } catch (err) {
          console.log(err)
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
            `INSERT INTO ${tableName} (id, title, url) values ` +
            cards.map((i) => `(${i.id}, '${i.title}', '${i.url}')`).join(',')
          const onSuccess = (itself, result) => resolve(result.rows._array)
          const onError = (itself, err) => reject(err)
          await db.transaction((tr) =>
            tr.executeSql(query, [], onSuccess, onError),
          )
        } catch (err) {
          reject(err)
        }
      })
    },
    clearStorageCards() {
      if (!db) throw Error(LABELS.NO_DATABASE)
      const query = `drop table ${tableName}`
      const onSuccess = (itself, result) => {
        resolve(result.rows._array)
      }
      const onError = (itself, err) => reject(err)
      db.transaction((tr) => tr.executeSql(query, [], onSuccess, onError))
    },
  }

  React.useEffect(() => {
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
