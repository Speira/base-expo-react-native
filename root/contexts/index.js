import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ThemeProvider from '~contexts/ThemeContext'
import APIProvider from '~contexts/APIContext'
import StorageProvider from '~contexts/StorageContext'

/**
 * contexts
 * @context
 * @desc ::: Merge all context providers into one, easier to use
 *
 */
function Contexts({ children }) {
  return (
    <SafeAreaProvider>
      <StorageProvider>
        <APIProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </APIProvider>
      </StorageProvider>
    </SafeAreaProvider>
  )
}

Contexts.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Contexts
