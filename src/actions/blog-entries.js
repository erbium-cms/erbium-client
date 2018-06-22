import { RECEIVE_BLOG_ENTRIES, BLOG_ENTRY_UPDATED } from '../types'
import { getBlogEntries, update } from './blog-entries.service'

export const receiveBlogEntries = entries => ({
  type: RECEIVE_BLOG_ENTRIES,
  entries
})

export const blogEntryUpdated = entry => ({
  type: BLOG_ENTRY_UPDATED,
  entry
})

export function fetchBlogEntries() {
  return dispatch => {
    getBlogEntries().then(({ success, entries }) => {
      dispatch(receiveBlogEntries(entries))
    })
  }
}

export function updateBlogEntry(blogEntry) {
  return dispatch => {
    update(blogEntry).then(({ success }) => {
      dispatch(blogEntryUpdated(blogEntry))
    })
  }
}
