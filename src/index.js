import r from 'ramda'
import React from 'react'
import {render} from 'react-dom'
import {stream, combine} from 'flyd'

const ap = (f, s) => () => s(f(s()))

const count = stream(0)
const incrementCount = ap(r.inc, count)
const decrementCount = ap(r.dec, count)

const Counter = (props) => (
  <div>
    <h1>{props.prefix}: {count()}</h1>
    <button onClick={decrementCount}>-</button>
    <button onClick={incrementCount}>+</button>
  </div>
)

combine(() => render(
  <Counter prefix='Count' />,
  document.getElementById('root')
), [count])
