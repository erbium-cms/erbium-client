import React from 'react'
import PropTypes from 'prop-types'

import showdown from 'showdown'
import prettify from 'showdown-prettify' // eslint-disable-line no-unused-vars

import BlogEntry from './blog-entry'

const BlogEntriesContainer = ({ blogEntries }) => {
  let converter = new showdown.Converter({ extensions: ['prettify'] })

  return (
    <div>
      {blogEntries.map((blogEntry, index) => (
        <BlogEntry
          key={index}
          title={blogEntry.title}
          modified={blogEntry.modified}
          author={blogEntry.author}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(blogEntry.content)
            }}
          />
        </BlogEntry>
      ))}
    </div>
  )
}

BlogEntriesContainer.propTypes = {
  blogEntries: PropTypes.array.isRequired
}

export default BlogEntriesContainer
