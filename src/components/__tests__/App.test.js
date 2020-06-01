import React from 'react';
import App from 'components/App'
import { shallow } from 'enzyme'
import CommentBox from 'components/commentBox'
import CommentList from 'components/commentList'

let wrapped
beforeEach(()=> { // function dari jest bakal jalan sebelum memulai setiap test yang ada
	wrapped = shallow(<App />)
})

it('ini comment box', ()=> {
	expect(wrapped.find(CommentBox).length).toEqual(1) // find mencari component yang di inginkan balikannya adalah array, makanaya make length lalu toEqual maksudnya adalah expect nya ada 1 component yang muncul
})

it('ini comment list', ()=> {
	expect(wrapped.find(CommentList).length).toEqual(1)
})
