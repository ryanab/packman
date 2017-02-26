import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { accountReducer, profileReducer, orderReducer } from '../reducers'

var store;

export default {

	configureStore: (initial) => {
		const reducers = combineReducers({
    	profile: profileReducer,
			account: accountReducer,
			order: orderReducer
		})

		store = createStore(
			reducers,
			initial,
			applyMiddleware(thunk)
		)
		return store
	},
	
	currentStore: () => {
		return store
	}
}