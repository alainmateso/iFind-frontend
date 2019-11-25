/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class PostComponent extends Component {
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
        <button type="submit" className="btn btn-view-more">View Item</button>
      </div>
    );
  }
}
