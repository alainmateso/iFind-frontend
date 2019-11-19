import { DEFAULT_ACTION } from './types';

export const defaultAction = () => {
    return dispatch => {
        dispatch({
            type: DEFAULT_ACTION,
            payload: 'Redux works!'
        });
    };
}; 