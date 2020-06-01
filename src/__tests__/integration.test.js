import React from 'react'
import { mount } from 'enzyme';
import Root from 'root'
import App from 'components/App'
import moxios from 'moxios' // gunanya untuk faking axios request, jadi tidak perlu asyncchronous, langsung instant dapet response
//integration test adalah test yang menyeluruh
beforeEach(()=> {
	moxios.install()
	moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [
			{ name : 'mahaldi' },
			{ name : 'wijaya' },
			{ name : 'saputra' },
		]//fake data nya sebagai balikan pengganti axios
	})
})
afterEach(()=> {
	moxios.uninstall()

})
it('can fetch list of comments and display them', (done)=> {

	// attempt to render the entire app
	const wrapped = mount(
		<Root>
			<App />
		</Root>
	)

	//find the comment button and click it
	wrapped.find('.fetch-button').simulate('click')

	//expect to find list of comments
	moxios.wait(()=> { // karna moxios tidak langsung jalan, pokoknya perlu sedikit waktu sebelum moxios jalan
		wrapped.update()
		expect(wrapped.find('li').length).toEqual(3)
		done()// callback dari jest yang memberitahu bahwa test nya done, dan jika menggunakan param done maka harus manggil callback functionnya
		wrapped.unmount()
	})

})
