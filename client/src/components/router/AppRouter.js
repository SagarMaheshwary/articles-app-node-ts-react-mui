import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ArticleIndex from '../articles/ArticleIndex';
import ArticleCreate from '../articles/ArticleCreate';
import ArticleEdit from '../articles/ArticleEdit';
import ArticleShow from '../articles/ArticleShow';

function AppRouter() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/articles" component={ArticleIndex} />
			<Route exact path="/articles/create" component={ArticleCreate} />
			<Route exact path="/articles/:id/edit" component={ArticleEdit} />
			<Route exact path="/articles/:id" component={ArticleShow} />
		</Switch>
	);
}

export default AppRouter;
