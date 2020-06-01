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
	// const textArea = wrapped.find('textarea') // jangan dipisah gni bakal error, mungkin karna pass value by reference ?
	wrapped.find('textarea').simulate('change', {
		target: { value: 'new comment' } // target dan value mengikuti dari balikan event callback onChange
	}) //menggunakan html event bkn react event(onChange)

	wrapped.update() // engga pake ini juga tetep pass sebenernya, gunanya ini untuk nge force update dom karna ada setState pas merubah value yang bakal nge re render component secara async tidak instant. makanya perlu ini agar instant nge re render nya
	expect(wrapped.find('textarea').prop('value')).toEqual('new comment') // prop yang ada di tag textarea (bisa prop apa aja custom prop juga bisa)
})

it('when form submitted, textarea get empty', ()=> {
	wrapped.find('textarea').simulate('change', {
		target: {value: 'new comment'}
	})
	wrapped.update()

	wrapped.find('form').simulate('submit')
	wrapped.update()

	expect(wrapped.find('textarea').prop('value')).toEqual('')
})
