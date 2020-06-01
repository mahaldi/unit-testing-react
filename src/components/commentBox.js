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
	fetchComments = () => {
		this.props.fetchComments()
	}
	render() {
		let { comment } = this.state
    return (
			<React.Fragment>
				<form onSubmit={this.handleSubmit}>
					<h4>Add a comment</h4>
					<textarea onChange={this.handleChange} value={comment}/>
					<div>
						<button>submit comment</button>
					</div>
				</form>
				<button className="fetch-button" onClick={this.fetchComments}>fetch comments</button>
			</React.Fragment>
		)
	}
}
export default connect(null, actions)(CommentBox)
