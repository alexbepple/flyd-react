import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'

import rootReducer from './state'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(
    // add middlewares here
  ))
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

