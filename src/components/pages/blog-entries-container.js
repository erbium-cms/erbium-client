import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import BlogEntry from './blog-entry'
import BlogEntryContent from './blog-entry-content'

const BlogEntriesContainer = ({ blogEntries }) => (
  <div>
    {blogEntries.map((blogEntry, index) => (
      <BlogEntry
        key={index}
        title={blogEntry.title}
        modified={blogEntry.modified}
        author={blogEntry.author}
        content={blogEntry.content}
        renderContent={BlogEntryContent}
      />
    ))}
  </div>
)

BlogEntriesContainer.propTypes = {
  blogEntries: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    blogEntries: state.blogEntries
  }
}

export default connect(
  mapStateToProps,
  null
)(BlogEntriesContainer)
