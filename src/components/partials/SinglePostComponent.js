/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class PostComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewSingle: (post) => {
        this.props.history.push({
          pathname: `/posts/${post.id}`,
          item: post
        })
      }
    }
  }
  render() {
    const { post } = this.props;
    return (
      <div className="single-post card">
        <div className="post-image">
          <img src={post.image} alt="post" />
          <p className={`tag ${post.type === 'found' ? 'green' : 'red'}`}>{post.type}</p>
        </div>
        <div className="post-details">
          <p>{`Full name: ${post.full_name}`}</p>
          <p>{`Phone number: ${post.phonenumber}`}</p>
          <p>{`Email: ${post.email}`}</p>
        </div>
        <button type="submit" className="btn btn-view-more" onClick={() => {
          this.state.viewSingle(post)
        }}>View Item</button>
      </div>
    );
  }
}
