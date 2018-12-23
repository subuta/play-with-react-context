import React from 'react'
import _ from 'lodash'

import {
  withPropsOnChange,
  shallowEqual
} from 'recompose'

// Pick state props from props.
const pickState = (props) => _.omit(props, [
  // Exclude react props.
  'children'
])

// Expose props as state.
const deriveStateFromProps = () => {
  return withPropsOnChange(
    (props, nextProps) => !shallowEqual(pickState(props), pickState(nextProps)),
    // Expose props as state.
    props => ({ state: pickState(props) })
  )
}

export {
  deriveStateFromProps
}

export default {
  deriveStateFromProps
}
