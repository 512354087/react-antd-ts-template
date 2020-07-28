import { SET_USERINFO, UserActionTypes, User } from './types'
import { Roles } from '../../router/config'
import { getUser } from '@/utils/cookie'
const userName = getUser() ? getUser().username : 'Donie'
const initialState: User = {
  username: userName,
  token: '',
  role: Roles.Admin
}

export function userReducer(state = initialState, action: UserActionTypes): User {
  switch (action.type) {
    case SET_USERINFO:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
