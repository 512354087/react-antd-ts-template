import { SET_USERINFO, UserActionTypes, User } from './types'

const initialState: User = {
  usernmae: '',
  token: ''
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
