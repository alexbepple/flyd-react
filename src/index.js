import React from 'react'
import {render} from 'react-dom'
import {stream} from 'flyd'

const counter = stream()
counter(2)

const Message = ({message}) => (
  <h1>Hello ({counter()})</h1>
)

render(
  <Message message='Hello!' />,
  document.getElementById('root')
)

counter(3)
