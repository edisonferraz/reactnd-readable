import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCategories, getPosts } from 'actions';
import CategoryMenu from 'components/CategoryMenu';
import PostsList from 'components/PostsList';

class PostsContainer extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    const { categories, posts, match } = this.props;
    const categoryName = match.params.name;

    const filteredPosts = posts.filter(
      p => (categoryName ? p.category === categoryName : p)
    );

    return (
      <div>
        <CategoryMenu categories={categories} />

        {filteredPosts.length ? (
          <PostsList posts={filteredPosts} />
        ) : (
          <p className="alert alert-warning">No Posts</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  posts: state.posts,
});

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()),
    getPosts: () => dispatch(getPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
