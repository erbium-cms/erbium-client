import { combineReducers } from 'redux'
import blogEntries from './blog-entries'

const erbiumApp = combineReducers({
  blogEntries
})

export default erbiumApp
