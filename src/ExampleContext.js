import React from 'react'

import {
  compose,
  withStateHandlers
} from 'recompose'

import { deriveStateFromProps } from './utils/reactContext'

const Context = React.createContext({})
const { Consumer } = Context

const enhance = compose(
  withStateHandlers(
    () => ({
      shops: []
    }),
    {
      setShops: () => (shops) => {
        return {
          shops
        }
      }
    }
  ),
  deriveStateFromProps()
)

// Wrap & render children with specified context provider.
const Provider = enhance(({ state, children }) => {
  return (
    <Context.Provider value={state}>{children}</Context.Provider>
  )
})

export {
  Context,
  Consumer as ExampleConsumer,
  Provider as ExampleProvider
}

export default Context
