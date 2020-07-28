import { User, SET_USERINFO, UserActionTypes } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function SetUser(user: User): UserActionTypes {
  return {
    type: SET_USERINFO,
    payload: user
  }
}
