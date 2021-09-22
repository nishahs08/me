import {
	TimelineDot,
	TimelineContent,
	TimelineConnector,
	TimelineSeparator,
	TimelineItem,
	Timeline,
	TimelineOppositeContent,
} from '@mui/lab';
import Particles from 'react-particles-js';
import { particlesConfig } from 'particles.js';
const timeline = [
	{
		year: 2021,
		work: 'Covid Tracker',
	},
	{
		year: 2021,
		work: 'Covid Tracker',
	},
	{
		year: 2021,
		work: 'Started working ',
	},
	{
		year: 2020,
		work: 'Started learning React',
	},
	{
		year: 2019,
		work: 'Took a break',
	},
	{
		year: 2018,
		work: 'Left TechMahindra for Freelance opportunities',
	},
	{
		year: 2018,
		work: 'Left TechMahindra for Freelance opportunities',
	},
	{
		year: 2016,
		work: 'Started as a Software Developer in Tech Mahindra',
	},
	{
		year: 2016,
		work: 'Graduated in Computer Science and Engineering',
	},
];
export const TimeLine = () => {
	return (
		<div style={{ position: 'absolute !important', top: 0, bottom: 0, left: 0, right: 0 }}>
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
				}}
			>
				<Particles width='99%' params={particlesConfig}>
					{' '}
				</Particles>
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
					}}
				>
					<Timeline variant='outlined'>
						{timeline.map((item, index) => (
							<TimelineItem>
								<TimelineOppositeContent color='text.secondary'>{item.year}</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineDot variant='outlined' />
									{timeline.length - 1 !== index ? <TimelineConnector /> : null}
								</TimelineSeparator>
								<TimelineContent>{item.work}</TimelineContent>
							</TimelineItem>
						))}
					</Timeline>
				</div>
			</div>
		</div>
	);
};
