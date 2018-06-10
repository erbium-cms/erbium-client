const blogEntries = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_BLOG_ENTRIES':
      return action.items
    default:
      return state
  }
}

export default blogEntries
