/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterFoundPosts, filterLostPosts, unfilterPosts } from '../../actions/postActions';

class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
      pills: [
        {
          id: 1,
          name: 'all',
        },
        {
          id: 2,
          name: 'lost',
        },
        {
          id: 3,
          name: 'found',
        },
      ],
    };
  }


  render() {
    const { active, pills } = this.state;
    const changeActive = (e) => {
      const { value } = e.target;
      this.setState({
        active: value,
      });

      const { props } = this;
      if (value === 1) {
        props.unfilterPosts();
      }
      if (value === 2) {
        props.filterLostPosts();
      }
      if (value === 3) {
        props.filterFoundPosts();
      }
    };

    const createPills = (allPills) => allPills.map((pill) => (
      <li
        className={`pill ${active === pill.id ? 'active' : ''}`}
        key={pill.id}
        value={pill.id}
        onClick={changeActive}
        onKeyUp={this.handleKeyUp}
      >
        {pill.name}
      </li>
    ));
    return (
      <div className="pillBox">
        <ul className="filterPills">
          {
            createPills(pills)
          }
        </ul>
      </div>
    );
  }
}

FilterComponent.propTypes = {
  filterFoundPosts: PropTypes.func.isRequired,
  filterLostPosts: PropTypes.func.isRequired,
  unfilterPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps,
  {
    filterFoundPosts,
    filterLostPosts,
    unfilterPosts,
  })(FilterComponent);
