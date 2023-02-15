import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error from './pages/Error';
import Home from './pages/Home';
import Events, { loader as eventsLoader } from './pages/Events';
import EventDetail, {
	loader as eventDetailLoader,
	action as deleteEventAction,
} from './pages/EventDetail';
import NewEvent from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import { action as manipulateEventAction } from './components/EventForm';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			errorElement: <Error />,
			children: [
				{ index: true, element: <Home /> },
				{
					path: 'events',
					element: <EventsRootLayout />,
					children: [
						{ index: true, element: <Events />, loader: eventsLoader },
						{
							path: ':eventId',
							id: 'event-detail',
							loader: eventDetailLoader,
							children: [
								{
									index: true,
									element: <EventDetail />,
									action: deleteEventAction,
								},
								{
									path: 'edit',
									element: <EditEvent />,
									action: manipulateEventAction,
								},
							],
						},
						{
							path: 'new',
							element: <NewEvent />,
							action: manipulateEventAction,
						},
					],
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
