import React from 'react'
import { connect } from 'react-redux'

export default ChildComponent => {
	class composedComponent extends React.Component {

		redirect = () => {
			if(!this.props.auth)
				this.props.history.push('/')
		}
		componentDidMount() {
			this.redirect()
		}
		componentDidUpdate() {
			this.redirect()
		}
		render() {
			return <ChildComponent {...this.props}/>
		}
	}

	const mapStateToProps = (state) => {
		return {
			auth: state.auth
		}
	}
	return connect(mapStateToProps)(composedComponent)
}
