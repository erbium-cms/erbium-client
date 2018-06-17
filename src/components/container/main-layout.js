import React from 'react'
import PropTypes from 'prop-types'
import { Segment } from 'semantic-ui-react'

import CompanyHeader from './company-header'

const HeaderSegmentStyle = {
  minHeight: 300,
  padding: '1em 0em'
}

const MainLayout = ({ children }) => (
  <div>
    <Segment inverted textAlign="center" style={HeaderSegmentStyle} vertical>
      <CompanyHeader />
    </Segment>

    {children}
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default MainLayout
