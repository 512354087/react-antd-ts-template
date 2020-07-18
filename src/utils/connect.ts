import * as actions from '../store/action'
import { connect } from 'react-redux'

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default connect(
  (state) => ({
    state
  }),
  (dispatch) => {
    return {
      ...actions,
      dispatch
    }
  }
)
