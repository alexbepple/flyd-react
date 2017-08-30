import r from 'ramda'
import {combineReducers} from 'redux'
import message from './message'

const messageProp = 'message'

const reducer = combineReducers({
  [messageProp]: message
})

export const getMessage = r.prop(messageProp)

export default reducer

