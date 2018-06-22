import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route } from 'react-router-dom'

import MainLayout from './components/container/main-layout'
import HomePage from './components/pages/home-page'
import BlogPage from './components/pages/blog-page'
import BlogEditPage from './components/pages/blog-edit-page'

const App = () => (
  <MainLayout>
    <Route path="/" exact component={HomePage} />
    <Route path="/blog-page/:id" component={BlogPage} />
    <Route path="/blog-edit-page/:id" component={BlogEditPage} />
  </MainLayout>
)

export default App
