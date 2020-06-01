import { SAVE_COMMENT } from 'actions/Types'
import { saveComment } from 'actions'

describe('save comment', ()=> {
	it('has the correct type', ()=> {
		const action = saveComment()

		expect(action.type).toEqual(SAVE_COMMENT)
	})

	it('has the correct payload', ()=> {
		let comment = 'new comment'
		const action = saveComment(comment)

		expect(action.payload).toEqual(comment)
	})
})
