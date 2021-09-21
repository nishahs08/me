import {AppBar , Avatar ,Toolbar,Typography} from '@mui/material';
import profile from '../images/profile.jpg'
export const MobileTopNavigation = () =>{
    return (
        <AppBar sx={{background:'#858585'}}>
            <Toolbar>
                <Avatar src={profile} />
                <Typography color='default' variant='h6'>Nisha Singh</Typography>
            </Toolbar>
        </AppBar>
    )
}