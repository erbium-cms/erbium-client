import React from 'react'
import { Segment } from 'semantic-ui-react'

import CompanyHeader from './company-header'
import BlogEntriesContainer from './blog-entries-container'

import { get } from '../../configuration.service'
import { getBlogEntries } from '../../blog-entries.service'

const HomePageContainerStyle = {
  minHeight: 300,
  padding: '1em 0em'
}

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      erbiumConfig: {
        companyHeader: ''
      },
      blogEntries: []
    }
  }

  componentDidMount() {
    get().then(response =>
      this.setState({ erbiumConfig: response.configuration })
    )

    getBlogEntries().then(response =>
      this.setState({ blogEntries: response.entries })
    )
  }

  render() {
    const { erbiumConfig, blogEntries } = this.state

    return (
      <div>
        <Segment
          inverted
          textAlign="center"
          style={HomePageContainerStyle}
          vertical
        >
          <CompanyHeader erbiumConfig={erbiumConfig} />
        </Segment>

        <BlogEntriesContainer blogEntries={blogEntries} />
      </div>
    )
  }
}

export default HomePage
