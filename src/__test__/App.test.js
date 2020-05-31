import React from 'react';
import ReactDom from 'react-dom'
import App from '../components/App'

it('ini comment box', ()=> {
	const div = document.createElement('div')

	ReactDom.render(<App />, div)
	expect(div.innerHTML).toContain('CommentBox')
	ReactDom.unmountComponentAtNode(div)
})
