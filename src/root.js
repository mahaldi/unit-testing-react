import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from 'reducers/index'
import React from 'react';

export default (props) => {
	return (
		<Provider store={createStore(reducer, {})}>
			{props.children}
		</Provider>
	)
}
