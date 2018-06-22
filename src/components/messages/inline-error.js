import React from 'react'
import PropTypes from 'prop-types'

const InlineErrorStyle = {
  color: '#ae5860'
}

const InlineError = ({ text }) => <span style={InlineErrorStyle}>{text}</span>

InlineError.propTypes = {
  text: PropTypes.string.isRequired
}

export default InlineError
