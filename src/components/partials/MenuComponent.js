/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          id: 1,
          name: 'home',
          label: 'Home',
          image: '/home.png',
        },
        {
          id: 2,
          name: 'create-post',
          label: 'Create Post',
          image: '/add.png',
        },
        {
          id: 3,
          name: 'my-posts',
          label: 'My Posts',
          image: '/open-book.png',
        },
        {
          id: 4,
          name: 'logout',
          label: 'Logout',
          image: '/logout.png',
        },
      ],
    };
  }

  render() {
    const { menuItems } = this.state;
    const renderMenu = (items) => items.map((item) => (
            <li className="navItem" key={item.id}>
                <img src={item.image} alt={item.name} />
                <a href="#">{item.label}</a>
            </li>
    ));

    return (
            <div className="navbar">
                <h3>iFind</h3>
                {/* <div className="navSearch">
                         <input className="input-search" placeholder="Search...." />
                         <button type="submit" className="btn btn-search">Search</button>
                     </div> */}
                <ul className="navLinks">
                    {renderMenu(menuItems)}
                </ul>
            </div>
    );
  }
}
