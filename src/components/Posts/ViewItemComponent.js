import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPostToState, getPostFromState } from '../../actions/postActions';
import MenuComponent from '../partials/MenuComponent';


class ViewItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    }
  }
  componentDidMount() {
    const { props } = this;
    const {location: {item}} = props;
    this.setState({
      item
    })
    props.setPostToState(item);
  }

  render() {
   
    const {item} = this.state;
    console.log(item);

    return (
      <div className="App">
       <MenuComponent />
        <div className="container">
            <h2>Item</h2>
            <div className="devider">  <div className="row">
      <div className="columnImage">
        <div>
    <img src={item && item.image} alt="" width="150" height="150" />
        </div>
      </div>
      <div className="columnDetails">
        <table className="SingleTable">
        <tbody>
            <tr>
              <td><b>Full name:</b></td>
              <td>{item && item.full_name}</td>
            </tr>
          <tr>
          <td>
            <b>Phone number:</b>

          </td>
            <td>{item && item.phonenumber}</td>

          </tr>
          <tr>
          <td>
            <b>Email:</b>

          </td>
            <td>{item && item.email}</td>
          </tr>
          <tr>
              <td><b>description:</b></td>
              <td>{item && item.description}</td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
         </div>
      </div> 
      </div>
    );
  }
}

ViewItemComponent.propTypes = {
  setPostToState: PropTypes.func.isRequired,
  getPostFromState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { setPostToState, getPostFromState })(ViewItemComponent);
