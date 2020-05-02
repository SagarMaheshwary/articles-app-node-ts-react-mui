import React, { useContext, useEffect } from 'react';
import { Container, makeStyles, Typography, Grid } from '@material-ui/core';
import { GlobalContext } from '../../store';
import { getArticles } from '../../actions';
import ArticleCard from './components/ArticleCard';

const useStyles = makeStyles({
	heading: {
		textAlign: 'center',
		marginTop: '2rem',
		marginBottom: '3rem',
	},
});

function ArticleIndex() {
	const [globalState, dispatch] = useContext(GlobalContext);

	const classes = useStyles();

	useEffect(() => {
		if (!globalState.isLoaded) {
			(async () => await getArticles(dispatch))();
		}
	}, []);

	const { articles } = globalState;

	return (
		<Container>
			<Typography variant="h2" component="h2" className={classes.heading}>
				All Articles
			</Typography>
			<Grid container spacing={3}>
				{articles.map((article) => (
					<Grid item xs={12} sm={12} md={6} lg={4} key={article._id}>
						<ArticleCard
							_id={article._id}
							title={article.title}
							body={article.body}
							createdAt={article.created_at}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default ArticleIndex;
