import React, { Component } from 'react';
import { connect } from 'react-redux';
import { defaultAction } from '../actions/defaultActions';
import logo from './../zoom.png';


class HomeComponent extends Component {
    componentDidMount() {
        this.props.defaultAction();
    }
    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Welcome to iFind!
                    </p>
                    <h1>{this.props.text}</h1>
                </header>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.default.text
});
export default connect(mapStateToProps, { defaultAction })(HomeComponent);