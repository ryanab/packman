import constants from '../constants'

var initialState = {
  packedList: [],
  nonPackedList: []
  //all orders also keyed by ID
}

export default(state = initialState, action) =>{

  let updated = Object.assign({}, state)
  switch(action.type){
    case constants.ORDERS_RECEIVED:
    let updatedList = Object.assign([], action.payload)
    updated.nonPackedList = updatedList
    //iterate through array and store each key pointint to the order object
    return updated

    default:
    return updated
  }
}