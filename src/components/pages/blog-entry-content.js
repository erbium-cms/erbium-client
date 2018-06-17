import React from 'react'
import PropTypes from 'prop-types'

import showdown from 'showdown'
import prettify from 'showdown-prettify' // eslint-disable-line no-unused-vars

const converter = new showdown.Converter({
  headerLevelStart: 3,
  extensions: ['prettify']
})
converter.setFlavor('github')

const BlogEntryContentStyle = {
  maxHeight: '10em',
  overflow: 'hidden'
}

const BlogEntryContent = ({ content, fixed }) => (
  <div
    style={fixed ? BlogEntryContentStyle : {}}
    dangerouslySetInnerHTML={{
      __html: converter.makeHtml(content)
    }}
  />
)

BlogEntryContent.propTypes = {
  content: PropTypes.string.isRequired,
  fixed: PropTypes.bool.isRequired
}

export default BlogEntryContent
