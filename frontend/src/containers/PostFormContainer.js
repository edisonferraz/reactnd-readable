import React, { Component } from 'react';
import PostForm from 'components/PostForm';

class PostFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        body: '',
        author: '',
        category: '',
      },
    };
  }

  onChange = e => {
    this.setState({
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value,
      },
    });
  };

  sendForm = e => {
    e.preventDefault();
    // console.log('Form', this.state.fields);
  };

  render() {
    return (
      <PostForm
        fields={this.state.fields}
        onChange={this.onChange}
        sendForm={this.sendForm}
      />
    );
  }
}

export default PostFormContainer;
