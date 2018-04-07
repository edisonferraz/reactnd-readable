import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { getCategories, createPost } from 'actions';

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
    this.props.createPost(this.state.fields).then(() => {
      this.props.history.push('/');
    });
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
};

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  createPost: post => dispatch(createPost(post)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostFormContainer)
);
