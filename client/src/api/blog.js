import axios from 'axios'
import { ROOT_API_URL, apiEndpoints } from '../constants/paths'

export const createBlogPost = async payload => {
  const response = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.blogPosts.create}`,
    payload
  )
  return response.data
}

export const getBlogPost = async id => {
  const response = await axios.get(`${ROOT_API_URL}${apiEndpoints.blogPosts.getAll}/${id}`)
  return response.data
}

export const getAllBlogPosts = async () => {
  const response = await axios.get(`${ROOT_API_URL}${apiEndpoints.blogPosts.getAll}`)
  return response.data
}