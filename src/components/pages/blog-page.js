import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { CustomPropTypes } from '../custom-prop-types'
import BlogEntry from './blog-entry'
import BlogEntryContent from './blog-entry-content'

const BlogPage = ({ match, blogEntries }) => {
  const { id } = match.params
  const blogEntry = blogEntries.find(item => item.id === id)

  return (
    <div>
      <BlogEntry
        blogEntry={blogEntry}
        renderContent={content => <BlogEntryContent content={content} />}
      />
    </div>
  )
}

BlogPage.propTypes = {
  match: CustomPropTypes.matchParamsId.isRequired,
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
