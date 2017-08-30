import React from 'react'
import {render} from 'react-dom'
import flyd from 'flyd'

import {Counter, count} from './flakes/counter'

const App = () => <div>
  <Counter prefix='Count' />
</div>

flyd.combine(() => render(
  <App />,
  document.getElementById('root')
), [count])
