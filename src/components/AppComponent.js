import React from 'react';
import MenuComponent from './partials/MenuComponent';
import PostsComponent from './Posts/PostsComponent';
import CategoryComponent from './Categories/CategoryComponent';
import FilterComponent from './partials/FilterComponent';

export default () => (
    <div className="App">
        <MenuComponent />
        <div className="container">
            <h2>All Posts</h2>
            <FilterComponent />
            <div className="devider">
                <div className="categoryContainer">
                    <CategoryComponent />
                </div>
                <div className="postsContainer">
                    <PostsComponent />
                </div>
            </div>
        </div>
    </div>
);
