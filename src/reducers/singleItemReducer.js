import { GET_ITEMS } from '../actions/types';

const initialState = {
  item: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};
