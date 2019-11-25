import axios from 'axios';
import {
  GET_ITEMS
} from './types';

// eslint-disable-next-line import/prefer-default-export
const arr = window.location.href.split('=')
export const fetchSingleItem = (id) => (dispatch) => axios.get(`http://ifind-backend.herokuapp.com/api/v1/posts/${arr[arr.length -1]}`)
  .then((res) => dispatch({ 
    type: GET_ITEMS,
    payload: res.data,
  }));

      