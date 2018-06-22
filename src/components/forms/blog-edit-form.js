import React from 'react'
import PropTypes from 'prop-types'

import { Form, TextArea, Button } from 'semantic-ui-react'

import InlineError from '../messages/inline-error'

const ContentTextAreaStyle = {
  height: '30em'
}

class BlogEditForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        title: '',
        content: '',
        author: ''
      },
      errors: {}
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const { title, content, author } = this.state.data
    let errors = {}

    if (!title.trim()) {
      errors.title = 'Please enter a title.'
    }
    if (!content.trim()) {
      errors.content = 'Please enter some meaningfull content.'
    }
    if (!author.trim()) {
      errors.author = 'Please enter a author.'
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors: errors })
      return
    }

    this.props.submit(this.state.data)
  }

  onChange(e) {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  }

  render() {
    const { title, content, author } = this.state.data
    const { errors } = this.state

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.title}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            placeholder="Some Blog Title"
            value={title}
            onChange={this.onChange}
          />
          {errors.title && <InlineError text={errors.title} />}
        </Form.Field>
        <Form.Field error={!!errors.author}>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            placeholder="Blog Author"
            value={author}
            onChange={this.onChange}
          />
          {errors.author && <InlineError text={errors.author} />}
        </Form.Field>
        <Form.Field error={!!errors.content}>
          <label htmlFor="content">Content</label>
          <TextArea
            id="content"
            name="content"
            style={ContentTextAreaStyle}
            placeholder="Blog Markdown"
            value={content}
            onChange={this.onChange}
          />
          {errors.content && <InlineError text={errors.content} />}
        </Form.Field>
        <Button primary>Save Changes</Button>
      </Form>
    )
  }
}

BlogEditForm.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string
  }).isRequired,
  submit: PropTypes.func.isRequired
}

export default BlogEditForm
