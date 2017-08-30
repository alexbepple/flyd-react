import React from 'react'
import {render} from 'react-dom'
import {stream, combine} from 'flyd'

const count = stream()
count(0)
const incrementCount = () => count(count() + 1)
const decrementCount = () => count(count() - 1)

const Counter = () => (
  <div>
    <h1>Count: {count()}</h1>
    <button onClick={decrementCount}>-</button>
    <button onClick={incrementCount}>+</button>
  </div>
)

combine(() => render(
  <Counter />,
  document.getElementById('root')
), [count])
