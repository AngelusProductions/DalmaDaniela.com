import { configureApiRoot } from '../utils/config'

export const paths = {
  home: '/',
  superClass: '/superclass',
  magicCalendars: '/magic-calendars',
  blog: {
    page: '/blog',
    allBlogPosts: '/blog/posts',
    blogPost: '/blog/posts/:id',
    create: '/blog/create'
  },
  team: '/team',
  contactUs: '/contact',
  geniusMarketingServices: '/services',
  auth: {
    login: '/auth/login',
    signup: '/auth/signup'
  }
}

export const apiEndpoints = {
  loginWithPassword: '/auth/password',
  loginWithJwt: '/auth/jwt',
  signup: '/signup',
  payment: '/stripe',
  upload: '/upload'
}

export const ROOT_API_URL = configureApiRoot()
