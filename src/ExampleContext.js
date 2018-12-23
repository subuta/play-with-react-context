import React from 'react'
import { createContext } from 'react'

import {
  compose,
  withStateHandlers
} from 'recompose'

import {
  zipState,
  renderProvider
} from './utils/reactContext'

const Context = createContext({})
const { Consumer, Provider } = Context

const ExampleProvider = compose(
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
  zipState(['shops', 'setShops'])
)(renderProvider(Provider))

export {
  Context,
  Consumer as ExampleConsumer,
  ExampleProvider
}

export default Context
