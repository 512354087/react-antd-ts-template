import { userReducer } from './user/reducers'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension' // 开启chrome redux插件调试工具
import { appReducer } from '@/store/app/reducers'
/**
 * 合并创建一个整体的reducer
 */
const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, composeWithDevTools())

export default store
