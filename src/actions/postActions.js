import axois from 'axios';
import { GET_POSTS } from './types';

// eslint-disable-next-line import/prefer-default-export
export const fetchPosts = () => (dispatch) => axois.get('https://ifind-backend.herokuapp.com/api/v1/posts')
  .then((res) => dispatch({
    type: GET_POSTS,
    payload: res.data,
  }));
