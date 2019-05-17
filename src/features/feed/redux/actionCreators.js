import axios from 'axios'
import { GET_POST_LIST_REQUEST, GET_POST_LIST_SUCCESS, GET_POST_LIST_FAILURE } from './actionTypes'

export const getPostList = () => (dispatch) => {
  dispatch({type: GET_POST_LIST_REQUEST})
  return axios({
    method: 'get',
    responseType: 'json',
    url: `http://localhost:3000/posts`,
    headers: []
  })
    .then((res) => {
     console.log('res', res)
     dispatch({type: GET_POST_LIST_SUCCESS, result: res.data})
    })
    .catch(err => dispatch({
      type: GET_POST_LIST_FAILURE,
      error: err.error
    }))
}