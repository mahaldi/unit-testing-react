import React from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'


class CommentBox extends React.Component {
	state = {
		comment: ''
	}
	handleChange = (e) => {
		this.setState({
			comment: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.state.comment)
		this.props.saveComment(this.state.comment)
		this.setState({
			comment: ''
		})
	}
	render() {
		let { comment } = this.state
    return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add a comment</h4>
				<textarea onChange={this.handleChange} value={comment}/>
				<div>
					<button>submit comment</button>
				</div>
			</form>
		)
	}
}
export default connect(null, actions)(CommentBox)
