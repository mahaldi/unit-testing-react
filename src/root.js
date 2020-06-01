import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from 'reducers/index'
import React from 'react';

export default ( { children, initialState = {} }) => {
	return (
		<Provider store={createStore(reducer, initialState)}>
			{ children }
		</Provider>
	)
}
