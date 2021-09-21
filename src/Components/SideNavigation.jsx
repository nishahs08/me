import { Drawer, styled, Box, Avatar, Typography, IconButton } from '@mui/material';
import profile from '../images/profile.jpg';
import Typewriter from 'typewriter-effect';
import GitHub from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
export const SideNavigation = () => {
	const SideBar = styled(Drawer)(({ theme }) => ({
		background: '#858585',
		width: '260px',
	}));

	const TextLink = styled(Typography)(({ theme }) => ({
		fontStyle: 'italic',
		textDecorationLine: 'underline',
		padding: '18px',
		fontWeight: 600,
		color: '#fff',
	}));

	const IconBtn = styled(IconButton)(({ theme }) => ({
		color: '#fff',
		margin: '10px',
	}));
	return (
		<SideBar anchor='left' variant='permanent' PaperProps={{ sx: { background: '#858585', width: '364px' } }}>
			<Box sx={{ display: 'flex ', flexDirection: 'column', height: '100%' }}>
				<Box sx={{ p: 2, alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
					<Avatar
						src={profile}
						sx={{
							cursor: 'pointer',
							width: 164,
							height: 164,
							border: '5px solid #C4C4C4',
						}}
						to='/about-me'
					/>
				</Box>

				<Box sx={{ p: 2, alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
					<Typography variant='h4' style={{ color: '#fff' }}>
						Hi there!
					</Typography>
					<Typography variant='h5' style={{ color: '#fff' }}>
						I am
					</Typography>
					<Typography variant='h5' style={{ color: '#fff' }}>
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString('Nisha,')
									.pauseFor(250)
									.deleteAll()
									.typeString('frontend developer')
									.pauseFor(250)
									.deleteAll()
									.start();
							}}
							options={{ loop: true, autoStart: true }}
						/>
					</Typography>
				</Box>

				<Box sx={{ p: 2, alignItems: 'center', display: 'flex', flexDirection: 'column', marginTop: '55px' }}>
					<Link to='/'>
						{' '}
						<TextLink variant='h5'>About Me</TextLink>
					</Link>
					<Link to='/projects'>
						<TextLink variant='h5'>My Work</TextLink>
					</Link>
				</Box>

				<Box
					sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'row',
						position: 'absolute',
						justifyContent: 'center',
						bottom: 0,
						left: 0,
						right: 0,
					}}
				>
					<Box>
						<IconBtn>
							<GitHub fontSize='large' />
						</IconBtn>
						<IconBtn>
							<LinkedInIcon fontSize='large' />{' '}
						</IconBtn>
						<IconBtn>
							<EmailIcon fontSize='large' />
						</IconBtn>
					</Box>
				</Box>
			</Box>
		</SideBar>
	);
};
