import { combineReducers } from 'redux';
import defaultReducer from './defaultReducer';
import postsReducer from './postsReducer';
import categoryReducer from './categoryReducer';
import singleItemReducer from './singleItemReducer'

export default combineReducers({
  default: defaultReducer,
  posts: postsReducer,
  categories: categoryReducer,
  item: singleItemReducer
});
