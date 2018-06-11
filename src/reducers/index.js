import { combineReducers } from 'redux'
import configuration from './configuration'
import blogEntries from './blog-entries'

const erbiumApp = combineReducers({
  configuration,
  blogEntries
})

export default erbiumApp
