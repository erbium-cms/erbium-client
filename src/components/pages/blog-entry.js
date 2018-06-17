import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Container, Header } from 'semantic-ui-react'

const BlogEntryContainerStyle = {
  padding: '1em 0em'
}

const BlogEntryAuthorStyle = {
  fontStyle: 'italic',
  float: 'right'
}

const BlogEntry = ({ id, blogEntry, renderContent }) => {
  const { title, modified, content, author } = blogEntry

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
    </Container>
  )
}

BlogEntry.propTypes = {
  id: PropTypes.number.isRequired,
  blogEntry: PropTypes.shape({
    title: PropTypes.string,
    modified: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string
  }).isRequired,
  renderContent: PropTypes.func.isRequired
}

export default BlogEntry
