import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import featureReducers from './features/reducers'

const AppReducers = combineReducers({
    form: formReducer,
    featureReducers
})
const store = createStore(AppReducers, applyMiddleware(thunk))

export default store