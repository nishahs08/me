import * as React from 'react';
import { Button, CardActionArea, CardActions, IconButton,Card,CardContent,CardMedia,Typography } from '@mui/material';
import GitHub from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


export const Project = ({ project }) => {
  const {title,src} =project;
  console.log(project)
	return (

		<Card sx={{ maxWidth: 345, background: '#EFEFEF' }}>
			<CardActionArea>
				<CardMedia component='img' height='240' image={src} alt='img' width='100%' height='100%' />
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
					<LinkedInIcon />
				</IconButton>
				<IconButton>
					<EmailIcon />
				</IconButton>

				<Button size='small' color='primary'>
					Read More
				</Button>
			</CardActions>
		</Card>
	);
};
