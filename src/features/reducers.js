import { combineReducers } from 'redux'
import { feeds } from './feed/redux/reducers'
import { currentData } from './post/redux/reducers'

export default combineReducers({
  feeds, currentData
})