import React from 'react'
import CommentBox from './commentBox'
import CommentList from './commentList'
import { Route } from 'react-router-dom'

const App = () => {
	return (
		<div>
			<Route path="/" exact component={CommentList}/>
			<Route path="/post" exact component={CommentBox}/>
		</div>
	)
}

export default App
