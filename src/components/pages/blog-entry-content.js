import React from 'react'

import showdown from 'showdown'
import prettify from 'showdown-prettify' // eslint-disable-line no-unused-vars

const converter = new showdown.Converter({ extensions: ['prettify'] })

const BlogEntryContent = content => (
  <div
    dangerouslySetInnerHTML={{
      __html: converter.makeHtml(content)
    }}
  />
)

export default BlogEntryContent
