import * as React from 'react';
import {
	Button,
	CardActionArea,
	CardActions,
	IconButton,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Box,
} from '@mui/material';
import GitHub from '@mui/icons-material/GitHub';

import LanguageIcon from '@mui/icons-material/Language';

export const Project = ({ project }) => {
	const { title, src } = project;
	console.log(project);
	return (
		<Card sx={{ maxWidth: 445, background: '#EFEFEF' }}>
			<CardActionArea>
				<CardMedia height='200' alt='img' width='100%'>
					<img src={project.src} style={{ width: '100%', height: '300px' }} />
				</CardMedia>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{title}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						An App that dose shit
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<IconButton>
					<GitHub />
				</IconButton>
				<IconButton>
					<LanguageIcon />
				</IconButton>

				<Box style={{ flexGrow: 1 }} />
				<Button size='small' color='primary'>
					Read More
				</Button>
			</CardActions>
		</Card>
	);
};
