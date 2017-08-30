import r from 'ramda'
import React from 'react'

export const connect = (inputsAndOutputs, Presentation) => 
  (props) => <Presentation {...r.merge(props, inputsAndOutputs)} />
