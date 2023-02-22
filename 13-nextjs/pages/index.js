import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUP = [
	{
		id: 'm1',
		title: 'A first Meetup',
		image:
			'https://www.freecodecamp.org/news/content/images/size/w2000/2019/08/meetup-talk.jpg',
		address: 'Some address 1, 12345, Some City',
	},
	{
		id: 'm2',
		title: 'A second Meetup',
		image:
			'https://www.freecodecamp.org/news/content/images/size/w2000/2019/08/meetup-talk.jpg',
		address: 'Some address 2, 12345, Some City',
	},
	{
		id: 'm3',
		title: 'A third Meetup',
		image:
			'https://www.freecodecamp.org/news/content/images/size/w2000/2019/08/meetup-talk.jpg',
		address: 'Some address 3, 12345, Some City',
	},
];

function HomePage() {
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		setLoadedMeetups(DUMMY_MEETUP);
	}, []);

	return <MeetupList meetups={loadedMeetups}></MeetupList>;
}

export default HomePage;
