import React from 'react'
import CommentBox from 'components/commentBox'
import { mount } from 'enzyme';
import Root from 'root'

let wrapped

beforeEach(()=> {
	wrapped = mount(
		<Root>
			<CommentBox />
		</Root>//memerlukan root karna jest akan akses ke provider dari redux makanya perlu di wrap dengan provider yang ada di root
	);
})

afterEach(()=> { // function helper dari jest yang akan jalan setelah semua test selesai
	wrapped.unmount()
})

it('has a text area and two button', ()=> {
	expect(wrapped.find('textarea').length).toEqual(1)
	expect(wrapped.find('button').length).toEqual(2)
})

describe('the text area', ()=> { // berguna untuk mengelompokan test, dan akan berbeda dengan yang diluar, ini karna ingin menggunakan before each lagi. tapi tidak ingin mengubah beforeeach yang sudah ada
	beforeEach(()=> {
		// const textArea = wrapped.find('textarea') // jangan dipisah gni bakal error, mungkin karna pass value by reference ?
		wrapped.find('textarea').simulate('change', {
			target: { value: 'new comment' } // target dan value mengikuti dari balikan event callback onChange
		}) //menggunakan html event bkn react event(onChange)
		wrapped.update() // engga pake ini juga tetep pass sebenernya, gunanya ini untuk nge force update dom karna ada setState pas merubah value yang bakal nge re render component secara async tidak instant. makanya perlu ini agar instant nge re render nya
	})
	it('user can type in text area', ()=> {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment') // prop yang ada di tag textarea (bisa prop apa aja custom prop juga bisa)
	})

	it('when form submitted, textarea get empty', ()=> {

		wrapped.find('form').simulate('submit')
		wrapped.update()

		expect(wrapped.find('textarea').prop('value')).toEqual('')
	})

})
