import React from 'react'
import PropTypes from 'prop-types'

import { Header, Container } from 'semantic-ui-react'

const CompanyHeaderStyle = {
  fontSize: '4em',
  fontWeight: 'normal',
  marginBottom: 0,
  marginTop: '1em'
}

const CompanyHeader = ({ erbiumConfig }) => (
  <Container text>
    <Header
      as="h1"
      content={erbiumConfig.companyHeader}
      inverted
      style={CompanyHeaderStyle}
    />
  </Container>
)

CompanyHeader.propTypes = {
  erbiumConfig: PropTypes.shape({
    companyHeader: PropTypes.string
  }).isRequired
}

export default CompanyHeader
