import React from 'react'

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

const BlogEntryContent = content => (
  <div
    style={BlogEntryContentStyle}
    dangerouslySetInnerHTML={{
      __html: converter.makeHtml(content)
    }}
  />
)

export default BlogEntryContent
