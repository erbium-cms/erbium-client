import React from 'react'
import PropTypes from 'prop-types'

import { Container, Header } from 'semantic-ui-react'

const BlogEntryContainerStyle = {
  padding: '1em 0em'
}

const BlogEntryAuthorStyle = {
  fontStyle: 'italic',
  float: 'right'
}

const BlogEntry = ({ title, modified, author, children }) => (
  <Container text style={BlogEntryContainerStyle}>
    <Header as="h2" content={title} />
    <p>
      <small>{modified}</small>
    </p>
    {children}
    <p style={BlogEntryAuthorStyle}>
      <small>{author}</small>
    </p>
  </Container>
)

BlogEntry.propTypes = {
  title: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default BlogEntry
