import React from 'react';
import MenuComponent from './partials/MenuComponent';
import postForm from './postForm';

export default () => (
    <div className="App">
        <MenuComponent />
        <div className="container">
            <div className="devider">
                <div className="postsContainer">
                    <postForm />
                </div>
            </div>
        </div>
    </div>
);