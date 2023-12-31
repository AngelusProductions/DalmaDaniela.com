import {
  GET_BLOG_POST_REQUEST,
  GET_BLOG_POST_FAILURE,
  GET_BLOG_POST_SUCCESS,
  GET_ALL_BLOG_POSTS_REQUEST,
  GET_ALL_BLOG_POSTS_FAILURE,
  GET_ALL_BLOG_POSTS_SUCCESS
} from '../constants'

const initialState = {
  blogPosts: [],
  blogPost: null,
  loading: false,
  errors: null
}

export default (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_BLOG_POST_REQUEST:
        return {
            ...state,
            loading: true,
            errors: null
        }
    case GET_ALL_BLOG_POSTS_REQUEST:
        return {
            ...state,
            loading: true,
            errors: null
        }
    case GET_BLOG_POST_FAILURE:
        return {
            ...state,
            loading: false,
            errors: action.errors
        }
    case GET_ALL_BLOG_POSTS_FAILURE:
        return {
            ...state,
            loading: false,
            errors: action.errors
        }
    case GET_BLOG_POST_SUCCESS:
        return {
            ...state,
            blogPost: action.blogPost,
            loading: false,
            errors: null
        }
    case GET_ALL_BLOG_POSTS_SUCCESS:
        return {
            ...state,
            blogPosts: action.blogPosts,
            loading: false,
            errors: null
        }
    default:
      return state
  }
}
