import * as utils from "../utils/utils.js"
export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const RECEIVE_POPULAR_POSTS = "RECEIVE_POPULAR_POSTS"

export const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    payload: posts
  }
}

export const fetchPosts = () => dispatch => {
  return utils.getPosts().then(posts => {
    return dispatch(receivePosts(posts.data.data))
  })
}

export const receivePopularPosts = popularPosts => {
  return {
    type: RECEIVE_POPULAR_POSTS,
    payload: popularPosts
  }
}

export const fetchPopularPosts = () => dispatch => {
  return utils.getPopularPosts().then(posts => {
    return dispatch(receivePopularPosts(posts.data.data))
  })
}
