import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import GitHub from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import PanToolIcon from '@mui/icons-material/PanTool';
import Close from '@mui/icons-material/Close';
const actions = [
	{ icon: <LinkedInIcon />, name: 'LinkedIn', link: '' },
	{ icon: <GitHub />, name: 'Github', link: '' },
	{ icon: <EmailIcon />, name: 'Email', link: '' },
	{ icon: <ShareIcon />, name: 'Share', link: '' },
];

export default function MobileSpeedDial() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<SpeedDial
			ariaLabel='SpeedDial tooltip example'
			sx={{ position: 'fixed', bottom: 5, right: 5 }}
			icon={open ? <Close /> : <PanToolIcon />}
			onClose={handleClose}
			onOpen={handleOpen}
			open={open}
		>
			{actions.map((action) => (
				<SpeedDialAction
					key={action.name}
					icon={action.icon}
					tooltipTitle={action.name}
					tooltipOpen
					onClick={handleClose}
				/>
			))}
		</SpeedDial>
	);
}
