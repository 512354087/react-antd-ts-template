import cookie from 'js-cookie'
import config from '../config'
import { User } from '@/store/user/types'

export const setToken = (token: string) => cookie.set(config.TOKEN_KEY, token)

export const getToken: () => string = () => cookie.get(config.TOKEN_KEY) || ''

export const removeToken = () => cookie.remove(config.TOKEN_KEY)

export const setUser = (user: User) => cookie.set('USER', JSON.stringify(user))

export const getUser = () => cookie.getJSON('USER')

export const removeUser = () => cookie.remove('USER')

export const removeAll = () => {
  removeToken()
  removeUser()
}
