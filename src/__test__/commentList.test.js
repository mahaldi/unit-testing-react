import React from 'react'
import { mount } from 'enzyme';
import Root from 'root'
import CommentList from 'components/commentList'

let wrapped

beforeEach(()=> {
	let initialState = {
		comments: ['comment1', 'commetn2']
	}
	wrapped = mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>//memerlukan root karna jest akan akses ke provider dari redux makanya perlu di wrap dengan provider yang ada di root
	);
})

it('has one LI per comment', ()=> {
	console.log(wrapped.find('li').length)
})
