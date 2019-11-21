import { DEFAULT_ACTION } from './types';

// eslint-disable-next-line import/prefer-default-export
export const defaultAction = () => (dispatch) => {
  dispatch({
    type: DEFAULT_ACTION,
    payload: 'Redux works!',
  });
};
