import { User } from './user/types'
import { App } from './app/types'
import { NoticeState } from './notice'

export interface IStoreState {
  app: User
  user: App
  notices: NoticeState
}
export interface IAction<T> {
  type: string
  payload: T
}
