import axios from 'axios'
import { ROOT_API_URL, apiEndpoints } from '../constants/paths'

export const createBlogPost = async payload => {
  const response = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.blogPost.create}`,
    payload
  )
  return response.data
}