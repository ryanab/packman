import React, { Component } from 'react'
import { Authenticate, Orders } from '../containers'

export default (props) => {
  return(
    <div>
      <Authenticate />
      <Orders />
    </div>
  )
}