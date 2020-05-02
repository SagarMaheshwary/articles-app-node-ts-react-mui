import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Container,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<AppBar position="static">
				<Container>
					<Toolbar>
						<Typography variant="h6">Articles App</Typography>
						<ul>
							<li style={{ listStyle: 'none', display: 'inline-block' }}>
								<Button component={Link} to={'/'} color="inherit">
									Home
								</Button>
							</li>
							<li style={{ listStyle: 'none', display: 'inline-block' }}>
								<Button component={Link} to={'/articles'} color="inherit">
									Articles
								</Button>
							</li>
							<li style={{ listStyle: 'none', display: 'inline-block' }}>
								<Button
									component={Link}
									to={'/articles/create'}
									color="inherit"
								>
									Create Article
								</Button>
							</li>
						</ul>
					</Toolbar>
				</Container>
			</AppBar>
		</header>
	);
}

export default Header;
