import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../actions/postActions';
import PostComponent from '../partials/SinglePostComponent';


class HomeComponent extends Component {
  componentDidMount() {
    const { props } = this;
    props.fetchPosts();
  }

  render() {
    const { posts } = this.props.posts;
    const postsLength = posts.length;

    if (postsLength === 0) {
      return (
        <div className="App">
          <h1>loading...</h1>
        </div>
      );
    }

    return (
      <div className="posts-container">
        {
          posts.data.map((post) => <PostComponent key={post.id} post={post} />)
        }
      </div>
    );
  }
}

HomeComponent.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(HomeComponent);
