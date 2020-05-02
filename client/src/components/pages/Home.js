import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	heading: {
		textAlign: 'center',
		marginTop: '2rem',
		marginBottom: '1rem',
	},
	paragraph: {
		textAlign: 'center',
	},
});

function Home() {
	const classes = useStyles();

	return (
		<Container>
			<Typography variant="h2" component="h2" className={classes.heading}>
				Articles App
			</Typography>
			<Typography variant="h6" component="h6" className={classes.paragraph}>
				This is Articles App build on MERN Stack.
			</Typography>
		</Container>
	);
}

export default Home;
