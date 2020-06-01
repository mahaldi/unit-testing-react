import { SAVE_COMMENT, FETCH_COMMENTS, ISLOGGED_IN } from './Types'
import axios from 'axios'

export function saveComment(comment) {
	return {
		type: SAVE_COMMENT,
		payload: comment
	}
}

export function fetchComments() {
	const response = axios.get('https://jsonplaceholder.typicode.com/comments')

	return {
		type: FETCH_COMMENTS,
		payload: response
	}
}

export function changeAuth(isLoggedin) {
	return {
		type: ISLOGGED_IN,
		payload: isLoggedin
	}
}
