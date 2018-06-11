import { RECEIVE_BLOG_ENTRIES } from '../types'
import { getBlogEntries } from './blog-entries.service'

export const receiveBlogEntries = entries => {
  return {
    type: RECEIVE_BLOG_ENTRIES,
    entries
  }
}

export function fetchBlogEntries() {
  return dispatch => {
    getBlogEntries().then(({ success, entries }) => {
      dispatch(receiveBlogEntries(entries))
    })
  }
}
