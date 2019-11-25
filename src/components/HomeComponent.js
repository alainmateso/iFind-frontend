import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultAction from '../actions/defaultActions';
import logo from '../zoom.png';


class HomeComponent extends Component {
  componentDidMount() {
    const { props } = this;
    props.defaultAction();
  }

  render() {
    const { text } = this.props;

    const linkStyle = {
      color: '#fff',
      // textDecoration: 'none',
    };

    return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Welcome to iFind!!!
                    </p>
                    <Link to="/users" style={linkStyle}>Signup</Link>
                    <h1>{text}</h1>
                </header>
            </div>
    );
  }
}

HomeComponent.propTypes = {
  text: PropTypes.string.isRequired,
  defaultAction: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  text: state.default.text,
});
export default connect(mapStateToProps, { defaultAction })(HomeComponent);
