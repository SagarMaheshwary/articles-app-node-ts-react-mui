import React, { useState, useContext, useEffect } from 'react';
import {
	Container,
	makeStyles,
	Typography,
	Grid,
	TextField,
	FormControl,
	Button,
} from '@material-ui/core';
import { GlobalContext } from '../../store';
import { addArticle, clearErrors } from '../../actions';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
	heading: {
		textAlign: 'center',
		marginTop: '2rem',
		marginBottom: '3rem',
		fontFamily: 'Roboto, sans-serif',
		fontWeight: '300',
	},
});

function ArticleCreate() {
	const classes = useStyles();
	const history = useHistory();
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [globalState, dispatch] = useContext(GlobalContext);

	useEffect(() => {
		clearErrors(dispatch);
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const article = {
			title,
			body,
		};

		const response = await addArticle(article, dispatch);
		if (response) {
			history.push('/articles');
		}
	};

	const { errors } = globalState;

	return (
		<Container>
			<Typography variant="h3" component="h3" className={classes.heading}>
				New Article
			</Typography>
			<form onSubmit={(e) => handleSubmit(e)}>
				<Grid container justify="center" alignItems="center" spacing={2}>
					<Grid item lg={6}>
						<FormControl fullWidth>
							<TextField
								error={errors.title.length > 0}
								label="Article Title"
								id="title"
								name="title"
								onChange={(e) => setTitle(e.target.value)}
								helperText={errors.title.length > 0 ? errors.title[0] : null}
							/>
						</FormControl>
					</Grid>
					<Grid item lg={12}></Grid>
					<Grid item lg={6}>
						<FormControl fullWidth>
							<TextField
								error={errors.body.length > 0}
								label="Article Body"
								id="body"
								name="body"
								multiline
								onChange={(e) => setBody(e.target.value)}
								helperText={errors.body.length > 0 ? errors.body[0] : null}
							/>
						</FormControl>
					</Grid>
					<Grid item lg={12}></Grid>
					<Grid item lg={2}>
						<Button type="submit" variant="contained" color="primary" fullWidth>
							Create
						</Button>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
}

export default ArticleCreate;
