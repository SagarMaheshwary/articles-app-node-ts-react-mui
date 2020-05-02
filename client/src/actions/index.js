import Axios from 'axios';
import {
	GET_ARTICLES,
	GET_ARTICLE,
	ADD_ARTICLE,
	UPDATE_ARTICLE,
	DELETE_ARTICLE,
	VALIDATION_FAILED,
	TOAST_MESSAGE,
	CLEAR_VALIDATION_ERRORS,
} from '../action-types';

export const getArticles = async (dispatch) => {
	try {
		const response = await Axios.get('/api/articles');
		dispatch({
			type: GET_ARTICLES,
			payload: response.data.articles || [],
		});
	} catch (err) {
		console.log(err);
	}
};

export const getArticle = async (id, dispatch) => {
	try {
		const response = await Axios.get(`/api/articles/${id}`);

		dispatch({
			type: GET_ARTICLE,
			payload: response.data.article,
		});
	} catch (err) {
		console.log(err);
	}
};

export const addArticle = async (article, dispatch) => {
	try {
		const response = await Axios.post('/api/articles', article);

		dispatch({
			type: ADD_ARTICLE,
			payload: response.data.article,
		});

		showToastMessage('Created new article!', 'success', dispatch);

		return true;
	} catch (err) {
		if (err.response !== undefined && parseInt(err.response.status) === 422) {
			const { errors } = err.response.data;

			dispatch({
				type: VALIDATION_FAILED,
				payload: errors || {},
			});
		}

		return false;
	}
};

export const updateArticle = async (article, dispatch) => {
	try {
		const response = await Axios.put(`/api/articles/${article.id}`, article);

		dispatch({
			type: UPDATE_ARTICLE,
			payload: response.data.article,
		});

		showToastMessage('Selected article has been updated!', 'success', dispatch);

		return true;
	} catch (err) {
		if (err.response !== undefined && parseInt(err.response.status) === 422) {
			const { errors } = err.response.data;

			dispatch({
				type: VALIDATION_FAILED,
				payload: errors || {},
			});
		}

		return false;
	}
};

export const deleteArticle = async (id, dispatch) => {
	try {
		await Axios.delete(`/api/article/${id}`);

		dispatch({
			type: DELETE_ARTICLE,
			payload: id,
		});

		showToastMessage('Selected article has been deleted!', 'success', dispatch);

		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
};

export const showToastMessage = (msg, type, dispatch) => {
	dispatch({
		type: TOAST_MESSAGE,
		payload: {
			show: true,
			msg,
			type,
		},
	});
};

export const hideToastMessage = (dispatch) => {
	dispatch({
		type: TOAST_MESSAGE,
		payload: {
			show: false,
			msg: '',
			type: '',
		},
	});
};

export const clearErrors = (dispatch) => {
	dispatch({
		type: CLEAR_VALIDATION_ERRORS,
	});
};
