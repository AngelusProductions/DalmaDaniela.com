import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  CLEAR_CURRENT_USER,
  CLEAR_LOGIN_ERRORS
} from '../constants'

export const loginRequest = { type: LOGIN_REQUEST }

export const loginFailure = errors => ({
  type: LOGIN_FAILURE,
  errors
})

export const loginSuccess = (email, token) => ({
  type: LOGIN_SUCCESS,
  email,
  token
})

export const logoutUser = { type: CLEAR_CURRENT_USER }

export const clearLoginErrors = { type: CLEAR_LOGIN_ERRORS }
