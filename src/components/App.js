import React from 'react'
import CommentBox from './commentBox'
import CommentList from './commentList'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as action from 'actions'

class App extends React.Component {
	toggleSignIn = () => {
		this.props.changeAuth(!this.props.auth)
	}
	buttonSignIn() {
		return <button onClick={this.toggleSignIn}>Sign {this.props.auth ? 'out':'in'}</button>
	}
	header() {
		return (
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/post">Post</Link></li>
				<li>{ this.buttonSignIn() }</li>
			</ul>
		)
	}
	render() {

		return (
			<div>
				{ this.header() }
				<Route path="/" exact component={CommentList}/>
				<Route path="/post" exact component={CommentBox}/>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}
export default connect(mapStateToProps, action)(App)
