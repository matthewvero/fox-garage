import blogTypes from './blog.types'

const initialState = {
      loading: true,
      carmaintenance: null,
      howtoguides: null,
      motorindustrynews: null
}

export const blogReducer = (state = initialState, {type, payload}) => {
      switch (type) {
            case blogTypes.updateBlogPosts:
                  return {
                        ...state,
                        [payload.blog]: payload.posts
                  }
            default: 
                  return state
      }
}