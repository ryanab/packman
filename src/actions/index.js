import constants from '../constants'
import { APIManager } from '../utils'

  const getRequest = (path, params, actionType) => {
    return (dispatch) => 
      APIManager.get(path, params)
      .then(response => {
        const payload = response.data || response.user
        dispatch({
          type: actionType,
          payload: payload,
          params: params
        })
        return response
      })
      .catch(err => {
        throw err        
      })
  }
    
  const postRequest = (path, params, actionType) => {
    return (dispatch) => 
      APIManager.post(path, params)
      .then(response => {
        const payload = response.data || response.user
        dispatch({
          type: actionType,
          payload: payload,
          params: params
        })
        return response
      })
      .catch(err => {
        throw err        
      })
  }

export default {

  login: (credentials) => {
    return (dispatch) => {
      return dispatch(postRequest('/account/login', credentials, constants.CURRENT_USER_RECEIVED))
    }
  },  

  register: (credentials) => {
    return (dispatch) => {
      return dispatch(postRequest('/account/register', credentials, constants.CURRENT_USER_RECEIVED))
    }
  },

  fetchCurrentUser: () => {
    return (dispatch) => {
      return dispatch(getRequest('/account/currentuser', null, constants.CURRENT_USER_RECEIVED))
    }
  }
}