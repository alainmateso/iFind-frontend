import MenuComponent from './partials/MenuComponent';
import PostsComponent from './Posts/PostsComponent';
import CategoryComponent from './Categories/CategoryComponent';
import FilterComponent from './partials/FilterComponent';

import React, { Component } from 'react'

export default class AppComponent extends Component {
    render() {
        return (
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
                        <PostsComponent props={this.props} />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


