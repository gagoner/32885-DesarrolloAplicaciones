import { API_KEY } from './key'

export const URL_API = 'https://rn-app-9a373-default-rtdb.firebaseio.com/'
export const URL_AUTH_SIGN_UP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
export const URL_AUTH_SIGN_IN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`