import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { getCategories, createPost, getPostById, editPost } from 'actions';

import PostForm from 'components/PostForm';

class PostFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        title: ' ',
        body: ' ',
        author: ' ',
        category: '',
      },
    };

    this.postId = this.props.match.params.id;
  }

  componentDidMount() {
    this.props.getCategories();
    if (this.postId) {
      this.props.getPostById(this.postId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id) {
      this.setState({
        fields: {
          ...this.state.fields,
          ...nextProps.post[0],
        },
      });
    }
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

    const { fields } = this.state;

    if (this.postId) {
      this.props.editPost(fields).then(() => {
        this.props.history.push('/');
      });
    } else {
      this.props.createPost(fields).then(() => {
        this.props.history.push('/');
      });
    }
  };

  render() {
    const { categories } = this.props;

    return (
      <PostForm
        fields={this.state.fields}
        categories={categories}
        onChange={this.onChange}
        sendForm={this.sendForm}
      />
    );
  }
}

PostFormContainer.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCategories: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  getPostById: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories,
  post: state.posts,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  createPost: post => dispatch(createPost(post)),
  editPost: post => dispatch(editPost(post)),
  getPostById: postId => dispatch(getPostById(postId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostFormContainer)
);
