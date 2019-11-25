import axois from 'axios';
import {
  GET_POSTS, FILTER_FOUND_POSTS, FILTER_LOST_POSTS, UNFILTER_POSTS,
  SET_POST_TO_STATE, GET_POST_FROM_STATE
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

export const setPostToState = (post) => (dispatch) => dispatch({
  type: SET_POST_TO_STATE,
  payload: post
});

export const getPostFromState = () => (dispatch) => dispatch({
  type: GET_POST_FROM_STATE
});

