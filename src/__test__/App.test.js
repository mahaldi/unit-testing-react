import React from 'react';
import App from 'components/App'
import { shallow } from 'enzyme'
import CommentBox from 'components/commentBox'
import CommentList from 'components/commentList'

it('ini comment box', ()=> {
	const wrapped = shallow(<App />)

	expect(wrapped.find(CommentBox).length).toEqual(1) // find mencari component yang di inginkan balikannya adalah array, makanaya make length lalu toEqual maksudnya adalah expect nya ada 1 component yang muncul
})

it('ini comment list', ()=> {
	const wrapped = shallow(<App />)
	expect(wrapped.find(CommentList).length).toEqual(1)
})
