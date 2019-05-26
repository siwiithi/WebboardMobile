import axios from 'axios'
import { 
  GET_POST_LIST_REQUEST, 
  GET_POST_LIST_SUCCESS, 
  GET_POST_LIST_FAILURE,
  FETCH_DELETE_POST_REQUEST,
  FETCH_DELETE_POST_FAILURE,
} from './actionTypes'


export const getPostList = () => (dispatch) => {
  dispatch({type: GET_POST_LIST_REQUEST})
  return axios({
    method: 'get',
    responseType: 'json',
    url: `http://localhost:3000/posts`,
    headers: []
  })
    .then((res) => {
     dispatch({type: GET_POST_LIST_SUCCESS, result: res.data})
    })
    .catch(err => dispatch({
      type: GET_POST_LIST_FAILURE,
      error: err.error
    }))
}

export const deletePost = (id) => (dispatch) => {
  dispatch({type: FETCH_DELETE_POST_REQUEST})
  return axios({
    method: 'DELETE',
    responseType: 'json',
    url: `http://localhost:3000/posts/${id}`,
    headers: [],
  })
  .then(() => {
    dispatch(getPostList())
  })
  .catch(err => {
    dispatch({
    type: FETCH_DELETE_POST_FAILURE,
    error: err.error
  })}
  )
}
