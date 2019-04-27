import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
// import { reducers as featureReducers } from './features'

const AppReducers = combineReducers({
    form: formReducer
})
const store = createStore(AppReducers)

export default store