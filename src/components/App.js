import r from 'ramda'
import React from 'react'
import {connect} from 'react-redux'

import {getMessage} from '../state'

const Message = ({message}) => (
  <h1>{message}</h1>
)

const mapState = r.applySpec({
  message: getMessage
})

export default connect(mapState)(Message)

