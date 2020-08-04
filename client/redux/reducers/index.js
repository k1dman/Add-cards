import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import users from './users'
import ui from './ui'

const createRootReducer = (history) =>
  combineReducers({
    users,
    ui,
    router: connectRouter(history)
  })

export default createRootReducer
