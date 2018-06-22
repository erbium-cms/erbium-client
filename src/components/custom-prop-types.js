import PropTypes from 'prop-types'

export const CustomPropTypes = {
  blogEntry: PropTypes.shape({
    title: PropTypes.string,
    modified: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string
  }),
  matchParamsId: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
}
