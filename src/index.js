import r from 'ramda'
import React from 'react'
import {render} from 'react-dom'
import {stream, combine} from 'flyd'
import {ap} from './util/flyd'

const connect = (inputsAndOutputs, Presentation) => 
  (props) => <Presentation {...r.merge(props, inputsAndOutputs)} />

const count = stream(0)

const CounterInternal = (props) => (
  <div>
    <h1>{props.prefix}: {props.count()}</h1>
    <button onClick={props.decrementCount}>-</button>
    <button onClick={props.incrementCount}>+</button>
  </div>
)

const inputsAndOutputs = { 
  count, 
  incrementCount: ap(r.inc, count), 
  decrementCount: ap(r.dec, count)
}

const Counter = connect(inputsAndOutputs, CounterInternal)

combine(() => render(
  <Counter prefix='Count' />,
  document.getElementById('root')
), [count])
