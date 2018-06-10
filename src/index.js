import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnly'

import App from './app'

import erbiumApp from './reducers'
import { fetchBlogEntries } from './actions/blog-entries'

const store = createStore(
  erbiumApp,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

store.dispatch(fetchBlogEntries())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
