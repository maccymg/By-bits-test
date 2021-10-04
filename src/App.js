import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Details from './components/Details'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/policy-details" component={Details}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
