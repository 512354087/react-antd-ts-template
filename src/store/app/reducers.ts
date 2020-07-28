import { SET_CALLAPSW_MENU, App, SetCollapseMenu } from './types'

const appState: App = {
  collapseMenu: false
}

export function appReducer(state = appState, action: SetCollapseMenu): App {
  switch (action.type) {
    case SET_CALLAPSW_MENU:
      return {
        ...state,
        collapseMenu: action.payload
      }
    default:
      return state
  }
}
