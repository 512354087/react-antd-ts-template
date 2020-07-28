import * as userActions from './user/action'
import * as appActions from './app/action'

export default {
  ...userActions,
  ...appActions
}
