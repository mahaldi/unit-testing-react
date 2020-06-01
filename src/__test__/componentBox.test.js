import React from 'react'
import CommentBox from 'components/commentBox'
import { mount } from 'enzyme';

it('has a text area and button', ()=> {
	const wrapped = mount(<CommentBox />);
	console.log(wrapped.find('textarea').length)
	console.log(wrapped.find('button').length)

	expect(wrapped.find('textarea').length).toEqual(1)
	expect(wrapped.find('button').length).toEqual(1)
})
