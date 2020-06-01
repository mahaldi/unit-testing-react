import React from 'react'
import { mount } from 'enzyme';
import Root from 'root'
import CommentList from 'components/commentList'

let wrapped

let initialState = {
	comments: ['comment1', 'commetn2']
}

beforeEach(()=> {
	wrapped = mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>//memerlukan root karna jest akan akses ke provider dari redux makanya perlu di wrap dengan provider yang ada di root
	);
})

it('has one LI per comment', ()=> {
	expect(wrapped.find('li').length).toEqual(2)
})

it('shows the text for each comment', ()=> {
	expect(wrapped.render().text()).toContain(initialState.comments[0])
	expect(wrapped.render().text()).toContain(initialState.comments[1])
})
