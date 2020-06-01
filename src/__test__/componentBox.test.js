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
	expect(wrapped.find('textarea').length).toEqual(1)
	expect(wrapped.find('button').length).toEqual(1)
})

it('user can type in text area', ()=> {
	wrapped.find('textarea').simulate('change', {
		target: { value: 'new comment' } // target dan value mengikuti dari balikan event callback onChange
	}) //menggunakan html event bkn react event(onChange)
})
