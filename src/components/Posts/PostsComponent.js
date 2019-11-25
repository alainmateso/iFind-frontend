import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { fetchPosts } from '../../actions/postActions';
import PostComponent from '../partials/SinglePostComponent';


class HomeComponent extends Component {
  componentDidMount() {
    const { props } = this;
    props.fetchPosts();
  }

  render() {
    const { posts: { posts } } = this.props;
    const postsLength = posts.length;
    if (postsLength === 0) {
      return (
        <div className="loader">
          <Loader
            type="Triangle"
            color="#f85c70"
            height={100}
            width={100}
          />
        </div>
      );
    }

    return (
      <div className="posts-container">
        {
          posts.data.map((post) => <PostComponent history={this.props.props.history} key={post.id} post={post} />)
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
