import constants from '../constants'

var initialState = {
  list: []
  //all orders also keyed by ID
}

export default(state = initialState, action) =>{

  let updated = Object.assign({}, state)
  switch(action.type){
    case constants.ORDERS_RECEIVED:
    //iterate through array and store each key pointint to the order object
    let updatedList = action.payload
    updated.list = updatedList
    return updated

    default:
    return updated
  }
}