import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import Search from './search'
import Result from './result'
import './App.css'

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Search} />
      <Route exact path="/result" component={Result} />
    </div>
  )
}

export default withRouter(App)
