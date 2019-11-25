import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategories } from '../../actions/categoryActions';

class CategoryComponent extends Component {
  componentDidMount() {
    const { props } = this;
    props.getCategories();
  }

  render() {
    const { categories: { categories } } = this.props;
    if (categories.length < 1) {
      return (
        null
      );
    }
    return (
      <div className="categoryList">
        <h3>Categories</h3>
        <ul>
          {categories.data.map((category) => (
            <li key={category.id}>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

CategoryComponent.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, { getCategories })(CategoryComponent);
