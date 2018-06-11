import { RECEIVE_BLOG_ENTRIES } from '../types'

const blogEntries = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_BLOG_ENTRIES:
      return action.entries
    default:
      return state
  }
}

export default blogEntries
