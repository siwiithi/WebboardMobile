import { 
  GET_POST_LIST_REQUEST, 
  GET_POST_LIST_SUCCESS, 
  GET_POST_LIST_FAILURE,
  FETCH_DELETE_POST_REQUEST,
  FETCH_DELETE_POST_SUCCESS,
  FETCH_DELETE_POST_FAILURE
} from './actionTypes'

const initState = {
  data: {},
  error: [],
  isFetching: false,
  isDeleting: false,
  deleteStatus: ''
}

const feeds = (state = initState, action) => {
  switch(action.type) {
    case GET_POST_LIST_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case GET_POST_LIST_SUCCESS:
      return {
        ...state,
        data: action.result,
        isFetching: false
      }
    case GET_POST_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case FETCH_DELETE_POST_REQUEST: 
      return {
        ...state,
        isDeleting: true
      }
    case FETCH_DELETE_POST_FAILURE:
      return {
        ...state,
        error: action.error,
        isDeleting: false
      }
    default: 
      return state 
  }
}

export { feeds }