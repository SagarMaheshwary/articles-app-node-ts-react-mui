import React from 'react';
import Header from './includes/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Footer from './includes/Footer';
import { GlobalProvider } from '../store';
import ToastMessage from './includes/ToastMessage';

function App() {
	return (
		<GlobalProvider>
			<BrowserRouter>
				<ToastMessage />
				<Header />
				<AppRouter />
				<Footer />
			</BrowserRouter>
		</GlobalProvider>
	);
}

export default App;
