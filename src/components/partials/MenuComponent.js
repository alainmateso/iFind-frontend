/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default () => (
    <div className="navbar">
        <h3>iFind</h3>

        <ul className="navLinks">
            <li className="navItem">
                <img src="https://img.icons8.com/dusk/000000/home.png" alt="account" />
                <a href="#">Home</a>
            </li>
            <li className="navItem">
                <img src="https://img.icons8.com/dusk/64/000000/literature.png" alt="account" />
                <a href="#">All Posts</a>
            </li>
            <li className="navItem">
                <img src="https://img.icons8.com/officexs/64/000000/shutdown.png" alt="account" />
                <a href="#">Logout</a>
            </li>
        </ul>
    </div>
);