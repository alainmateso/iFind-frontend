import axois from 'axios';
import {
  GET_POSTS, FILTER_FOUND_POSTS, FILTER_LOST_POSTS, UNFILTER_POSTS,
} from './types';

// eslint-disable-next-line import/prefer-default-export
export const fetchPosts = () => (dispatch) => axois.get('https://ifind-backend.herokuapp.com/api/v1/posts')
  .then((res) => dispatch({
    type: GET_POSTS,
    payload: res.data,
  }));


export const filterFoundPosts = () => (dispatch) => dispatch({
  type: FILTER_FOUND_POSTS,
});

export const filterLostPosts = () => (dispatch) => dispatch({
  type: FILTER_LOST_POSTS,
});

export const unfilterPosts = () => (dispatch) => dispatch({
  type: UNFILTER_POSTS,
});
