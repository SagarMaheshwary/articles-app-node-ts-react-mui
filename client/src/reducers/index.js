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

export default (state, { type, payload }) => {
	switch (type) {
		case GET_ARTICLES: {
			return {
				...state,
				articles: payload,
				isLoaded: true,
			};
		}
		case GET_ARTICLE: {
			return {
				...state,
				article: {
					...state.article,
					...payload,
				},
			};
		}
		case ADD_ARTICLE: {
			return {
				...state,
				articles: [...state.articles, payload],
			};
		}
		case UPDATE_ARTICLE: {
			const articles = state.articles;
			const index = articles.findIndex((article) => article._id === payload);

			articles[index] = payload;

			return {
				...state,
				articles: articles,
			};
		}
		case DELETE_ARTICLE: {
			return {
				...state,
				articles: state.articles.filter((article) => article._id !== payload),
			};
		}
		case VALIDATION_FAILED: {
			const errors = {};

			payload.forEach((error) => {
				if (errors[error.param] === undefined) {
					errors[error.param] = [];
				}

				errors[error.param].push(error.msg);
			});

			return {
				...state,
				errors: {
					...state.errors,
					...errors,
				},
			};
		}
		case CLEAR_VALIDATION_ERRORS: {
			return {
				...state,
				errors: {
					title: [],
					body: [],
				},
			};
		}
		case TOAST_MESSAGE: {
			return {
				...state,
				message: {
					...payload,
				},
			};
		}
		default: {
			return state;
		}
	}
};
