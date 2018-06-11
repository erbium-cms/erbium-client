import React from 'react'
import { Segment } from 'semantic-ui-react'

import CompanyHeader from './company-header'
import BlogEntriesContainer from './blog-entries-container'

const HomePageContainerStyle = {
  minHeight: 300,
  padding: '1em 0em'
}

const HomePage = () => (
  <div>
    <Segment
      inverted
      textAlign="center"
      style={HomePageContainerStyle}
      vertical
    >
      <CompanyHeader />
    </Segment>

    <BlogEntriesContainer />
  </div>
)

export default HomePage
