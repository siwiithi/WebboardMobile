import axios from 'axios'
import { 
  CREATE_POST_REQUEST, 
  CREATE_POST_SUCCESS, 
  CREATE_POST_FAILURE 
} from './actionTypes' 

export const createPost = () => (dispatch) => {
  dispatch({type: CREATE_POST_REQUEST})
  return axios({
    method: 'put',
    responseType: 'json',
    url: `http://localhost:3000/posts`,
    headers: []
  })
  .then((res) => {
    console.log('res,put', res)
    dispatch({type: CREATE_POST_SUCCESS})
  })
  .catch(err => 
    dispatch({
      type: CREATE_POST_FAILURE,
      error: err.error
    }))
}