import { App, SET_CALLAPSW_MENU, SetCollapseMenu } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function setCollapseMenu(collapseMenu: boolean): SetCollapseMenu {
  return {
    type: SET_CALLAPSW_MENU,
    payload: collapseMenu
  }
}
