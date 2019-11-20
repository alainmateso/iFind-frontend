import { DEFAULT_ACTION } from './types';

const defaultAction = () => (dispatch) => {
  dispatch({
    type: DEFAULT_ACTION,
    payload: 'Redux works!',
  });
};

export default defaultAction;
