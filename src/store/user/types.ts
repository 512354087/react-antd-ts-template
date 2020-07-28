import { Roles } from '../../router/config'
export const SET_USERINFO = 'SEND_MESSAGE'

export interface User {
  username: string
  token: string
  role: Roles
}

interface SetUserAction {
  type: typeof SET_USERINFO
  payload: User
}

export type UserActionTypes = SetUserAction
