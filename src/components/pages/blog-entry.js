import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Container, Header } from 'semantic-ui-react'

import { CustomPropTypes } from '../custom-prop-types'

const BlogEntryContainerStyle = {
  padding: '1em 0em'
}

const BlogEntryAuthorStyle = {
  fontStyle: 'italic',
  float: 'right'
}

const BlogEntry = ({ blogEntry, renderContent }) => {
  const { id, title, modified, content, author } = blogEntry

  return (
    <Container text style={BlogEntryContainerStyle}>
      <Link to={'blog-page/' + id}>
        <Header as="h2" content={title} />
      </Link>
      <p>
        <small>{modified}</small>
      </p>
      {renderContent(content)}
      <p style={BlogEntryAuthorStyle}>
        <small>{author}</small>
      </p>
      <Link to={'/blog-edit-page/' + id}>Edit</Link>
    </Container>
  )
}

BlogEntry.propTypes = {
  blogEntry: CustomPropTypes.blogEntry.isRequired,
  renderContent: PropTypes.func.isRequired
}

export default BlogEntry
