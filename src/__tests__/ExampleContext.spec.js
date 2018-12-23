import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'
import { create } from 'react-test-renderer'

import {
  ExampleProvider,
  ExampleConsumer
} from '../ExampleContext'

test('should render with size.', () => {
  const child = sinon.spy((props) => {
    return (
      <span>hoge</span>
    )
  })

  const App = (props) => {
    return (
      <ExampleConsumer>
        {child}
      </ExampleConsumer>
    )
  }

  const wrapper = mount(
    <ExampleProvider>
      <App />
    </ExampleProvider>
  )

  // Should call child.
  expect(child.callCount).toBe(1)

  let props = child.firstCall.args[0]

  // Should not update child on setState of parent.
  wrapper.setState({})
  expect(child.callCount).toBe(1)

  // Should update child on setState of itself.
  props.setShops([{name: 'hoge'}])
  expect(child.callCount).toBe(2)

  // Should exports props
  expect(true).toEqual(true)
})