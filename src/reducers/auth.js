import { ISLOGGED_IN } from 'actions/Types'

export default function(state=false, action) {
	switch(action.type) {
		case ISLOGGED_IN:
			return action.payload
		default:
			return state
	}
}
