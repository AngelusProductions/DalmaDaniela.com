import { configureApiRoot } from '../utils/config'

export const paths = {
  home: '/',
  superClass: {
    page: '/superclass',
    videos: '/superclass/videos',
    metaData: '/superclass/videos/data',
    watch: '/superclass/videos/:id',
    login: '/superclass/login'
  },
  magicCalendars: {
    page: '/magic-calendars',
    form: '/magic-calendars/form/:question',
    review: '/magic-calendars/form/review',
    checkout: '/magic-calendars/form/checkout',
  },
  blog: {
    page: '/blog',
    allBlogPosts: '/blog/posts',
    blogPost: '/blog/posts/:name',
    create: '/blog/create'
  },
  team: '/team',
  contactUs: '/contact-us',
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
  upload: '/upload',
  contact: '/contact',
  blogPosts: {
    getAll: '/blogposts',
    create: '/blogposts/create'
  },
  superClass: {
    login: '/superClass/login',
    progress: '/superClass/progress',
    complete: '/superClass/complete',
    saveInfo: '/superClass/saveInfo',
  },
  magicCalendars: {
    create: '/magic-calendars/create',
    saveGraphic: '/magic-calendars/saveGraphic',
    chatGPT: '/magic-calendars/chatGPT',
  }
}

export const ROOT_API_URL = configureApiRoot()
