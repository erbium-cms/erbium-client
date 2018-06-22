import { RECEIVE_BLOG_ENTRIES, BLOG_ENTRY_UPDATED } from '../types'

const blogEntries = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_BLOG_ENTRIES:
      return action.entries
    case BLOG_ENTRY_UPDATED:
      let entryToBeUpdated = state.find(entry => entry.id === action.entry.id)
      console.log(entryToBeUpdated)
      if (entryToBeUpdated) {
        entryToBeUpdated.title = action.entry.title
        entryToBeUpdated.author = action.entry.author
        entryToBeUpdated.content = action.entry.content
        entryToBeUpdated.modified = action.entry.modified
      }
      console.log('state updated.')
      console.log(state)
      return state
    default:
      return state
  }
}

export default blogEntries
