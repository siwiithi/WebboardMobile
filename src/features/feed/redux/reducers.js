import { 
  GET_POST_LIST_REQUEST, 
  GET_POST_LIST_SUCCESS, 
  GET_POST_LIST_FAILURE 
} from './actionTypes'

const initState = {
  data: {},
  error: [],
  isFetching: false
}

const feeds = (state = initState, action) => {
  switch(action.type) {
    case 'GET_POST_LIST_REQUEST':
      return {
        ...state,
        isFetching: true
      }
    case 'GET_POST_LIST_SUCCESS':
      return {
        ...state,
        data: action.result,
        isFetching: false
      }
    case 'GET_POST_LIST_FAILURE':
      return {
        ...state,
        error: action.error
      }
    default: 
      return state 
  }
}

export { feeds }