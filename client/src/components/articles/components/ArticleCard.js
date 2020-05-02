import React from 'react';
import {
	Card,
	CardMedia,
	CardActionArea,
	CardContent,
	Typography,
	makeStyles,
	CardActions,
	Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import moment from 'moment';

const useStyles = makeStyles({
	root: {
		maxWidth: '100%',
	},
	media: {
		height: 140,
	},
});

function ArticleCard(props) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea component={Link} to={`/articles/${props._id}`}>
				<CardMedia
					className={classes.media}
					image="/images/beachshowcase.jpg"
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.title}
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						{props.body.substring(0, 120)}...
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					size="small"
					component={Link}
					to={`/articles/${props._id}`}
					color="primary"
				>
					View Article
				</Button>
				<Typography
					variant="caption"
					gutterBottom
					style={{ marginTop: '5px', marginLeft: 'auto' }}
				>
					{new moment(props.createdAt).fromNow()}
				</Typography>
			</CardActions>
		</Card>
	);
}

export default ArticleCard;
