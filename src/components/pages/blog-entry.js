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

const BlogEntry = ({
  id,
  title,
  modified,
  author,
  content,
  renderContent
}) => (
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

BlogEntry.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  renderContent: PropTypes.func.isRequired
}

export default BlogEntry
