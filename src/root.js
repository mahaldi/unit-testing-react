import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from 'reducers/index'
import React from 'react';
import reduxPromise from 'redux-promise'

export default ( { children, initialState = {} }) => {
	const store = createStore(
		reducer,
		initialState,
		applyMiddleware(reduxPromise)
	)
	return (
		<Provider store={store}>
			{ children }
		</Provider>
	)
}
