export const SET_USERINFO = 'SEND_MESSAGE'

export interface User {
  usernmae: string
  token: string
}

interface SetUserAction {
  type: typeof SET_USERINFO
  payload: User
}

export type UserActionTypes = SetUserAction
