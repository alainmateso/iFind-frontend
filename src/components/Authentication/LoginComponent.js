/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

const axiosInstance = axios.create({
  baseURL: 'https://ifind-backend.herokuapp.com/api',
});

class LoginComponent extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { target } = e;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  storeToken(token) {
    window.localStorage.setItem('token', token);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { history } = this.props;

    axiosInstance.post('/v1/auth/signin', this.state)
      .then((res) => {
        this.storeToken(res.data.data.token);
        Swal.fire({
          icon: 'success',
          title: 'Ok',
          text: res.data.message,
        });
        history.push('/');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: error.response.data.message,
        });
      });
  }

  render() {
    const { email, password } = this.state;
    return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                  <input type="email" id="email" className="FormField__Input" required placeholder="Enter your email" name="email" autoComplete="off" value={email} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="password" id="password" className="FormField__Input" required placeholder="Enter your password" name="password" autoComplete="off" value={password} onChange={this.handleChange} />
                </div>

                <div className="FormField">
                    <button type="submit" className="FormField__Button mr-20">Login</button>
                    Don't have an account yet?
                    {' '}
                    <Link to="/users" className="FormField__Link">Sign Up here</Link>
                </div>
            </form>
        </div>
    );
  }
}
LoginComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default LoginComponent;
