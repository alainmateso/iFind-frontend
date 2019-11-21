import React from 'react';
import MenuComponent from './partials/MenuComponent';
import PostsComponent from './Posts/PostsComponent';

export default () => (
  <div className="App">
    <MenuComponent />
    <div className="container">
      <h2>All Posts</h2>
      <PostsComponent />
    </div>
  </div>
);
