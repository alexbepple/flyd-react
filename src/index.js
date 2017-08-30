import React from 'react'
import {render} from 'react-dom'
import flyd from 'flyd'

import {createCounter} from './flakes/counter'

const counter = createCounter()

const App = () => <div>
  <counter.Counter prefix='Count' />
</div>

flyd.combine(() => render(
  <App />,
  document.getElementById('root')
), [counter.count])
