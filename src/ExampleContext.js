import React from 'react'

import {
  withStateHandlers
} from 'recompose'

import createContext from './utils/createContext'

const { Context, Consumer, Provider } = createContext(
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
  )
)

export {
  Context,
  Consumer as ExampleConsumer,
  Provider as ExampleProvider
}

export default Context
