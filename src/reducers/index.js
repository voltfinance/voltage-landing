import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import ui from './ui'
import animation from './animation'
import errors from './errors'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ui,
  animation,
  errors
})

export default createRootReducer
