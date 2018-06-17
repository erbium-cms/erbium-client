import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route } from 'react-router-dom'

import MainLayout from './components/container/main-layout'
import HomePage from './components/pages/home-page'
import BlogPage from './components/pages/blog-page'

const App = () => (
  <MainLayout>
    <Route path="/" exact component={HomePage} />
    <Route path="/blog-page/:id" component={BlogPage} />
  </MainLayout>
)

export default App
