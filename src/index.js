import React from 'react'
import {render} from 'react-dom'
import flyd from 'flyd'

import {createCounter} from './flakes/counter'

const counter1 = createCounter()
const counter2 = createCounter()

const App = () => <div>
  <counter1.Counter prefix='Count 1' />
  <counter2.Counter prefix='Count 2' />
</div>

flyd.combine(() => render(
  <App />,
  document.getElementById('root')
), [counter1.count, counter2.count])
