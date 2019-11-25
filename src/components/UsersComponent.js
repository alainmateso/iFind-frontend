import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import SignupComponent from './Authentication/SignupComponent';
import LoginComponent from './Authentication/LoginComponent';
import './Authentication/Auth.scss';
import searchImage from '../assets/glass-white.png';


const Users = () => (
        <div className="Auth">
            <div className="Auth__Aside">
                <img src={searchImage} alt="Magnifying Glass" />
            </div>

            <div className="Auth__Form">
                <div className="PageSwitcher">
                    <NavLink to="/users/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Login</NavLink>
                    <NavLink exact to="/users" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                </div>

                <div className="FormTitle">
                    <NavLink to="/users/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Login</NavLink>
                    or
                    <NavLink exact to="/users" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                </div>

                <Route exact path="/users" component={SignupComponent} />
                <Route path="/users/login" component={LoginComponent} />
            </div>

        </div>
);

export default Users;
