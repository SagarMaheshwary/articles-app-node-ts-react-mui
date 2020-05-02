import React, { useContext, useEffect, useState } from 'react';
import {
	Container,
	makeStyles,
	Typography,
	Divider,
	Button,
	Box,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogActions,
	DialogTitle,
} from '@material-ui/core';
import { red, deepOrange } from '@material-ui/core/colors';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../store';
import { getArticle, deleteArticle } from '../../actions';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	title: {
		textAlign: 'center',
		marginTop: '2rem',
		marginBottom: '2rem',
	},
	body: {
		marginBottom: '2rem',
	},
	topSpacing: {
		marginTop: '2rem',
	},
	editButton: {
		background: deepOrange[500],
		'&:hover': {
			backgroundColor: deepOrange[600],
			borderColor: '#0062cc',
		},
	},
	deleteButton: {
		background: red[500],
		'&:hover': {
			backgroundColor: red[600],
			borderColor: '#0062cc',
		},
	},
});

function ArticleShow() {
	const classes = useStyles();
	const [globalState, dispatch] = useContext(GlobalContext);
	const { id } = useParams();
	const [modelOpen, setModelOpen] = useState(false);
	const { article } = globalState;

	useEffect(() => {
		(async () => await getArticle(id, dispatch))();
	}, []);

	const handleOpen = () => setModelOpen(true);
	const handleClose = () => setModelOpen(false);

	const handleDelete = async () => {
		await deleteArticle(dispatch);
	};

	return (
		<Container>
			<Typography variant="h2" component="h2" className={classes.title}>
				{article.title}
			</Typography>
			<Typography variant="subtitle1" className={classes.body}>
				{article.body}
			</Typography>
			<Divider />
			<Box display="flex" className={classes.topSpacing}>
				<Box m={1}>
					<Button
						variant="contained"
						component={Link}
						to={`/articles/${id}/edit`}
						color="primary"
						className={classes.editButton}
					>
						Edit Article
					</Button>
				</Box>
				<Box m={1} style={{ marginLeft: 'auto' }}>
					<Button
						variant="contained"
						color="primary"
						className={classes.deleteButton}
						onClick={(e) => handleOpen()}
					>
						Delete Article
					</Button>
				</Box>
			</Box>
			<Dialog
				open={modelOpen}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">Delete Article!</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Are you sure you want to proceed?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleDelete} color="primary" autoFocus>
						Proceed
					</Button>
				</DialogActions>
			</Dialog>
		</Container>
	);
}

export default ArticleShow;
