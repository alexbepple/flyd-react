import r from 'ramda'
import React from 'react'
import flyd from 'flyd'

import {ap} from '../util/flyd'
import {connect} from '../util/flyd-react'

const CounterInternal = (props) => (
  <div>
    <h1>{props.prefix}: {props.count()}</h1>
    <button onClick={props.decrementCount}>-</button>
    <button onClick={props.incrementCount}>+</button>
  </div>
)

export const createCounter = () => {
  const count = flyd.stream(0)

  const inputsAndOutputs = { 
    count, 
    incrementCount: ap(r.inc, count), 
    decrementCount: ap(r.dec, count)
  }

  const Counter = connect(inputsAndOutputs, CounterInternal)

  return {count, Counter}
}
