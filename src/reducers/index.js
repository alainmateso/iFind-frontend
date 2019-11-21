import { combineReducers } from 'redux';
import defaultReducer from './defaultReducer';
import postsReducer from './postsReducer';

export default combineReducers({
  default: defaultReducer,
  posts: postsReducer,
});
