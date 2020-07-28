export const SET_CALLAPSW_MENU = 'SET_CALLAPSW_MENU'

export interface App {
  collapseMenu: boolean
}

export interface SetCollapseMenu {
  type: typeof SET_CALLAPSW_MENU
  payload: boolean
}
