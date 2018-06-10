import React from 'react'
import { Segment } from 'semantic-ui-react'

import CompanyHeader from './company-header'
import BlogEntriesContainer from './blog-entries-container'

import { get } from '../../configuration.service'

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
      }
    }
  }

  componentDidMount() {
    get().then(response =>
      this.setState({ erbiumConfig: response.configuration })
    )
  }

  render() {
    const { erbiumConfig } = this.state

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

        <BlogEntriesContainer />
      </div>
    )
  }
}

export default HomePage
