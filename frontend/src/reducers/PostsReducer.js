import {RECEIVE_POSTS, RECEIVE_POPULAR_POSTS} from '../actions/postsAction.js'

const normalizeData = arr => {
  let obj = {};
  arr.forEach(item => {
    obj[item.id] = item
  });
  return obj
}

const PostsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return normalizeData(action.payload)
    case RECEIVE_POPULAR_POSTS:
      return action.payload
    default:
    return state
  }
}

export default PostsReducer
