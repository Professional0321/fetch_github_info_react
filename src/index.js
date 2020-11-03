import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import store from './store'
import './index.css'

const history = createBrowserHistory()
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
serviceWorker.unregister()
