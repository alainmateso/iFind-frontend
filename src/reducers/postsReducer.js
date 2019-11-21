import {
  GET_POSTS, FILTER_FOUND_POSTS, FILTER_LOST_POSTS, UNFILTER_POSTS,
} from '../actions/types';

const initialState = {
  allPosts: [],
  posts: [],
  foundPosts: [],
  lostPosts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      initialState.allPosts = action.payload;
      return {
        ...state,
        posts: initialState.allPosts,
      };
    case FILTER_FOUND_POSTS:
      initialState.foundPosts = state.allPosts.data.filter((post) => post.type === 'found');
      return {
        ...state,
        posts: {
          message: 'Filtered Posts: Found',
          data: initialState.foundPosts,
        },
      };
    case FILTER_LOST_POSTS:
      initialState.lostPosts = state.allPosts.data.filter((post) => post.type === 'lost');
      return {
        ...state,
        posts: {
          message: 'Filtered Posts: Lost',
          data: initialState.lostPosts,
        },
      };
    case UNFILTER_POSTS:
      return {
        ...state,
        posts: initialState.allPosts,
      };
    default:
      return state;
  }
};
