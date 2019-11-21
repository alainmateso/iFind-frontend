/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const iFindUrl = 'https://ifind-backend.herokuapp.com/api/v1';

class SignupComponent extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      phonenumber: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let { target } = e;
    let { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const newUser = this.state;


    axios.post(`${iFindUrl}/auth/signup`, newUser)
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Yay!',
          text: res.data.message,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops...',
          text: err.response.data.message,
        });
      });
  }

  render() {
    const {
      email, first_name, password, last_name, phonenumber,
    } = this.state;
    return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                  <input type="email" id="email" className="FormField__Input" required placeholder="Enter your email" name="email" autoComplete="off" value={email} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="password" id="password" className="FormField__Input" required placeholder="Enter your password" name="password" autoComplete="off" pattern="[A-Za-z][A-Za-z0-9]*" value={password} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="name">First Name</label>
                  <input type="text" id="first_name" className="FormField__Input" required placeholder="Enter your first name" name="first_name" autoComplete="off" pattern="[a-zA-Z]{3,10}" value={first_name} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="name">Last Name</label>
                  <input type="text" id="last_name" className="FormField__Input" required placeholder="Enter your last name" name="last_name" autoComplete="off" pattern="[a-zA-Z]{3,10}" value={last_name} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="name">Phone Number</label>
                  <input type="text" id="phonenumber" className="FormField__Input" required placeholder="Enter your phne number" name="phonenumber" autoComplete="off" pattern="[0-9]{3,10}" value={phonenumber} onChange={this.handleChange} />
                </div>

                <div className="FormField">
                    <button type="submit" className="FormField__Button mr-20">Sign Up</button>
                    Already have an account?
                    {' '}
                    <Link to="users/login" className="FormField__Link">Login instead</Link>
                </div>
            </form>
        </div>
    );
  }
}
export default SignupComponent;
