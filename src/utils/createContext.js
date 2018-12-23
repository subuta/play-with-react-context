import React from 'react'
import _ from 'lodash'

import {
  compose,
  withPropsOnChange
} from 'recompose'

// Create context with hocs.
const createContext = (exposed = [], ...hocs) => {
  const Context = React.createContext({})

  // Wrap & render children with specified context provider.
  const render = ({ state, children }) => {
    return (
      <Context.Provider value={state}>{children}</Context.Provider>
    )
  }

  const Provider = compose.apply(null, [
    ...hocs,
    // Expose specified props as state.
    withPropsOnChange(
      exposed,
      (props) => ({ state: _.pick(props, exposed) })
    )
  ])(render)

  return {
    Consumer: Context.Consumer,
    Context,
    Provider
  }
}

export {
  createContext
}

export default createContext