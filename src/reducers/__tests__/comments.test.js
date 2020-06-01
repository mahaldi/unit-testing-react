import commentReducer from 'reducers/comment'
import { SAVE_COMMENT }  from 'actions/Types'

it('handle save comment action creator', ()=> {
	const action = {
		type: SAVE_COMMENT,
		payload: 'new comment'
	}
	const newState = commentReducer([], action)

	expect(newState).toEqual([action.payload])
})
