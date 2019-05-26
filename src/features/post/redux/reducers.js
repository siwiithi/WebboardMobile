import { 
    CREATE_POST_REQUEST, 
    CREATE_POST_SUCCESS, 
    CREATE_POST_FAILURE,
    SET_CURRENT_DATA_REQUEST,
    SET_CURRENT_DATA_SUCCESS,
    SET_CURRENT_DATA_FAILURE
  } from './actionTypes'
  
  const initState = {
    currentData: {},
    isFetching: false,
    error: ''
  }
  
  const currentData = (state = initState, action) => {
    switch(action.type) {
      case SET_CURRENT_DATA_SUCCESS:
        return {
          ...state,
          currentData: true
        }
    case 'GET_CURRENT_DATA_REQUEST':
        return {
          ...state,
            isFetching: true
        }
    case 'GET_CURRENT_DATA_SUCCESS':
        return {
          ...state,
            currentData: action.result,
            isFetching: false
        }
    case 'GET_CURRENT_DATA_FAILURE':
        return {
          ...state,
            error: action.error,
            isFetching: false
        }
      case 'CLEAR_FORM':
        return {
          ...state,
          currentData: {}
        }
      default: 
        return state 
    }
  }
  
  export { currentData }