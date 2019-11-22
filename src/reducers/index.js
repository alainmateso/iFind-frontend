import { combineReducers } from 'redux';
import defaultReducer from './defaultReducer';
import postsReducer from './postsReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  default: defaultReducer,
  posts: postsReducer,
  categories: categoryReducer,
});
