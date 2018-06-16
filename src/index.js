import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnly'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './app'

import erbiumApp from './reducers'
import { loadConfiguration } from './actions/configuration'
import { fetchBlogEntries } from './actions/blog-entries'

const store = createStore(
  erbiumApp,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

store.dispatch(loadConfiguration())
store.dispatch(fetchBlogEntries())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
