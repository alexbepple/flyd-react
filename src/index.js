import React from 'react'
import {render} from 'react-dom'
import {stream, combine} from 'flyd'

const counter = stream()
counter(2)

const Message = ({message}) => (
  <h1>Hello ({message})</h1>
)

combine(count => render(
  <Message message={count()} />,
  document.getElementById('root')
), [counter])

setTimeout(() => counter(3), 1000)
