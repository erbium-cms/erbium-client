import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import BlogEntry from './blog-entry'
import BlogEntryContent from './blog-entry-content'

const BlogPage = ({ match, blogEntries }) => {
  const blogEntry = blogEntries[match.params.id]

  return (
    <div>
      <BlogEntry
        id={match.params.id}
        title={blogEntry.title}
        modified={blogEntry.modified}
        author={blogEntry.author}
        content={blogEntry.content}
        renderContent={content => BlogEntryContent(content, false)}
      />
    </div>
  )
}

BlogPage.propTypes = {
  match: PropTypes.shape.isRequired,
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
)(BlogPage)
