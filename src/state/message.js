import {createReducer, createAction} from 'redux-act'

const initialMessage = 'Hello, world!'
const noInitialHandlers = {}
const reducer = createReducer(noInitialHandlers, initialMessage)

export default reducer

