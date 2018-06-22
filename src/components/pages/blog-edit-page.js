import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Container } from 'semantic-ui-react'

import { CustomPropTypes } from '../custom-prop-types'

import { updateBlogEntry } from '../../actions/blog-entries'
import BlogEditForm from '../forms/blog-edit-form'

const ContainerStyle = {
  padding: '1em 0em'
}

class BlogEditPage extends React.Component {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit(data) {
    const { id } = this.props.match.params
    const blogEntry = this.props.blogEntries.find(item => item.id === id)

    this.props.updateBlogEntry({
      id: blogEntry.id,
      author: data.author,
      content: data.content,
      modified: blogEntry.modified,
      title: data.title
    })
    this.props.history.push('/')
  }

  render() {
    const { id } = this.props.match.params
    const blogEntry = this.props.blogEntries.find(item => item.id === id)

    return (
      <Container style={ContainerStyle}>
        <BlogEditForm
          data={{
            author: blogEntry.author,
            content: blogEntry.content,
            title: blogEntry.title
          }}
          submit={this.submit}
        />
      </Container>
    )
  }
}

BlogEditPage.propTypes = {
  match: CustomPropTypes.matchParamsId.isRequired,
  blogEntries: PropTypes.array.isRequired,
  updateBlogEntry: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = state => {
  return {
    blogEntries: state.blogEntries
  }
}

export default connect(
  mapStateToProps,
  { updateBlogEntry }
)(BlogEditPage)
