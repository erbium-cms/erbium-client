import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route } from 'react-router-dom'

import HomePage from './components/pages/home-page'
import BlogPage from './components/pages/blog-page'

const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/blog-page/:id" component={BlogPage} />
  </div>
)

export default App
