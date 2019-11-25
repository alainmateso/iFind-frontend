/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default () => (
    <div className="navbar">
        <h3>iFind</h3>

        {/* <div className="navSearch">
            <input className="input-search" placeholder="Search...." />
            <button type="submit" className="btn btn-search">Search</button>
        </div> */}
        <ul className="navLinks">
            <li className="navItem">
                <img src="/home.png" alt="account" />
                <a href="#">Home</a>
            </li>
            <li className="navItem">
                <img src="/add.png" alt="account" />
                <a href="#">Create Post</a>
            </li>
            <li className="navItem">
                <img src="/open-book.png" alt="account" />
                <a href="#">My Posts</a>
            </li>
            <li className="navItem">
                <img src="/logout.png" alt="account" />
                <a href="#">Logout</a>
            </li>
        </ul>
    </div>
);
