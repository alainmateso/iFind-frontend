import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import defaultAction from '../actions/defaultActions';
import logo from '../zoom.png';


class HomeComponent extends Component {
  componentDidMount() {
    this.props.defaultAction();
  }

  render() {
    const { text } = this.props;
    return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Welcome to iFind!
                    </p>
                    <h1>{text}</h1>
                </header>
            </div>
    );
  }
}

HomeComponent.propTypes = {
  text: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  text: state.default.text,
});
export default connect(mapStateToProps, { defaultAction })(HomeComponent);
