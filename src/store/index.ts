import { userReducer } from './app/reducers'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension' // chrome redux插件调试工具
/**
 * 合并创建一个整体的reducer
 */
const rootReducer = combineReducers({
  user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, composeWithDevTools())

export default store
