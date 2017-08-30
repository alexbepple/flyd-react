import React from 'react'
import {render} from 'react-dom'
import flyd from 'flyd'

import {Counter, count} from './flakes/counter'

flyd.combine(() => render(
  <Counter prefix='Count' />,
  document.getElementById('root')
), [count])
