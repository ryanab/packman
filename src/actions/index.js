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

  const putRequest = (path, params, actionType) => {
    return (dispatch) => 
      APIManager.put(path, params)
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
  },

  logout: () => {
    return (dispatch) => {
      return dispatch(getRequest('/account/logout', null, constants.CURRENT_USER_RECEIVED))
    }
  },

  getNonpackedOrders: (params) => {
    return (dispatch) => {
      return dispatch(getRequest('/api/order', params, constants.ORDERS_RECEIVED))
    }
  },

  updateProfile: (id, params) => {
    return (dispatch) => {
      return dispatch(putRequest('/api/profile/'+id, params, constants.CURRENT_USER_RECEIVED))
    }
  }
}