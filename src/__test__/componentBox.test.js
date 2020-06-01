import React from 'react'
import CommentBox from 'components/commentBox'
import { mount } from 'enzyme';

let wrapped

beforeEach(()=> {
	wrapped = mount(<CommentBox />);
})

afterEach(()=> { // function helper dari jest yang akan jalan setelah semua test selesai
	wrapped.unmount()
})

it('has a text area and button', ()=> {

	console.log(wrapped.find('textarea').length)
	console.log(wrapped.find('button').length)

	expect(wrapped.find('textarea').length).toEqual(1)
	expect(wrapped.find('button').length).toEqual(1)
})
