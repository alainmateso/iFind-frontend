import axois from 'axios';
import { GET_CATEGORY } from './types';

// eslint-disable-next-line import/prefer-default-export
export const getCategories = () => (dispatch) => axois.get('https://ifind-backend.herokuapp.com/api/v1/category')
  .then((res) => dispatch({
    type: GET_CATEGORY,
    payload: res.data,
  }));
