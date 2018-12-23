import React from 'react'
import _ from 'lodash'

import {
  compose,
  withPropsOnChange,
  shallowEqual
} from 'recompose'

// Pick state props from props.
const pickState = (props) => _.omit(props, [
  // Exclude react props.
  'children'
])

// Create context with hocs.
const createContext = (...hocs) => {
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
      (props, nextProps) => !shallowEqual(pickState(props), pickState(nextProps)),
      // exposed,
      props => ({ state: pickState(props) })
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