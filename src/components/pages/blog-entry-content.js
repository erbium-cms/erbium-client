import React from 'react'
import PropTypes from 'prop-types'

import showdown from 'showdown'
import prettify from 'showdown-prettify' // eslint-disable-line no-unused-vars
import { createExtension } from '../../markdown/showdown-image-handling' // eslint-disable-line no-unused-vars

createExtension(showdown)
const converter = new showdown.Converter({
  headerLevelStart: 3,
  extensions: ['prettify', 'image-handling']
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
  fixed: PropTypes.bool
}

export default BlogEntryContent
