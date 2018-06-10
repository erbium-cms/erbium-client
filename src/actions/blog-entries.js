import { getBlogEntries } from './blog-entries.service'

export const receiveBlogEntries = items => {
  return {
    type: 'RECEIVE_BLOG_ENTRIES',
    items
  }
}

export function fetchBlogEntries() {
  return dispatch => {
    getBlogEntries().then(({ success, entries }) => {
      dispatch(receiveBlogEntries(entries))
    })
  }
}
