import blogTypes from './blog.types'

export const updateBlogPosts = (payload) => ({
      type: blogTypes.updateBlogPosts,
      payload
})
