import React from 'react'
import { Route } from 'react-router-dom'

import SignIn from '../components/welcome/SignIn'
import Prompt from '../components/welcome/Prompt'

export default () => (
  [
    <Route key="home" path="/" exact component={SignIn}/>,
    <Route key="index" path="/regi" exact component={Prompt} />,
  ]
)
