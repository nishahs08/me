import logo from './logo.svg';
import './App.css';
import { Grid, Box, Hidden, Toolbar } from '@mui/material';
import { SideNavigation } from './Components/SideNavigation';
import { TimeLine } from './Components/TimeLine';
import { Projects } from './Components/Projects';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MobileTopNavigation } from './Components/MobileTopNavigation';
import MobileSpeedDial from './Components/MobileSpeedDial';

function App() {
	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	return (
		<Router>
			<Hidden smDown>
				<SideNavigation />
				<Toolbar />
			</Hidden>
			<Hidden smUp>
				<MobileTopNavigation />
				<MobileSpeedDial />
			</Hidden>
			<Box style={{ marginLeft: '364px' }}>
				<Route exact path='/'>
					<TimeLine />
				</Route>
				<Route exact path='/projects'>
					<Projects />
				</Route>
			</Box>
		</Router>
	);
}

export default App;
