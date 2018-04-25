import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { getCategories, createPost, getPosts, editPost } from 'actions';

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

  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  componentWillReceiveProps(nextProps) {
    const postId = nextProps.match.params.id;

    if (postId) {
      const post = nextProps.posts.filter(p => p.id === postId)[0];

      this.setState({
        fields: {
          ...this.state.fields,
          ...post,
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

    const editForm = this.state.fields.id;
    const { fields } = this.state;

    if (editForm) {
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
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories,
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  createPost: post => dispatch(createPost(post)),
  editPost: post => dispatch(editPost(post)),
  getPosts: () => dispatch(getPosts()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostFormContainer)
);
