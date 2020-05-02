import React, { createContext, useReducer } from 'react';
import AppReducer from './reducers';

const initialState = {
	articles: [],
	article: {
		_id: '',
		title: '',
		body: '',
		author: '',
		created_at: '',
		updated_at: '',
	},
	errors: {
		title: [],
		body: [],
	},
	message: {
		msg: '',
		type: '',
	},
	isLoading: false,
	isLoaded: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<GlobalContext.Provider value={[state, dispatch]}>
			{children}
		</GlobalContext.Provider>
	);
};
