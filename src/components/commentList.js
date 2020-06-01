import React from 'react'
import { connect } from 'react-redux'
class CommentList extends React.Component {

  render() {
		let { comments } = this.props
		return (
			<ul>
				Comment List
				{comments.map((comment, idx) => {
					return (
						<li key={idx}>{comment}</li>
					)
				})}
			</ul>
		)
	}
}
const mapStateToProps = (state)=> {
	return {
		comments: state.comments
	}
}
export default connect(mapStateToProps)(CommentList)
