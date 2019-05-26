import axios from 'axios'
import { 
  CREATE_POST_REQUEST, 
  CREATE_POST_SUCCESS, 
  CREATE_POST_FAILURE,
  SET_CURRENT_DATA_REQUEST,
  SET_CURRENT_DATA_SUCCESS,
  SET_CURRENT_DATA_FAILURE
} from './actionTypes'
import { getPostList } from '../../feed/redux/actionCreators'

export const createPost = (value) => (dispatch) => {
  dispatch({type: CREATE_POST_REQUEST})
  return axios({
    method: 'POST',
    responseType: 'json',
    url: `http://localhost:3000/posts/`,
    headers: [],
    data: {
      author: value.author, 
      title: value.title, 
      email: value.email, 
      detail: value.detail
    }
  })
  .then((res) => {
    dispatch({type: CREATE_POST_SUCCESS})
    dispatch(getPostList())
  })
  .catch(err => 
    dispatch({
      type: CREATE_POST_FAILURE,
      error: err.error
    }))
}

export const editPost = (id, data) => (dispatch) => {
  dispatch({type: 'EDIT_POST_REQUEST'})
  return axios({
    method: 'PUT',
    responseType: 'json',
    url: `http://localhost:3000/posts/${id}`,
    headers: [],
    data: {
      author: data.author, 
      title: data.title, 
      email: data.email, 
      detail: data.detail
    }
  })
  .then((res) => {
    dispatch({type: 'EDIT_POST_SUCCESS'})
    dispatch(getPostList())
  })
  .catch(err => 
    dispatch({
      type: 'EDIT_POST_FAILURE',
      error: err.error
    }))
}

export const getCurrentData = () => (dispatch) => {
  dispatch({type: 'GET_CURRENT_DATA_REQUEST'})
  return axios({
    method: 'GET',
    responseType: 'json',
    url: `http://localhost:3000/selectedPost`,
    headers: [],
  })
  .then(res=> {
    dispatch({type: 'GET_CURRENT_DATA_SUCCESS', result: res.data})
  })
  .catch(err => dispatch({ type:'GET_CURRENT_DATA_FAILURE', error: err.error}))
}

export const setCurrentData = (item) => (dispatch) => {
  dispatch({type: SET_CURRENT_DATA_REQUEST})
  return axios({
    method: 'POST',
    responseType: 'json',
    url: `http://localhost:3000/selectedPost/`,
    headers: [],
    data: {
      id: item.id,
      author: item.author, 
      title: item.title, 
      email: item.email, 
      detail: item.detail
    }
  })
  .then(() => {
    dispatch(getCurrentData())
  })
  .catch(err => 
    dispatch({
      type: SET_CURRENT_DATA_FAILURE,
      error: err.error
    }))
}

export const clearForm = () => (dispatch) => {
  dispatch({type:'CLEAR_FORM'})
}