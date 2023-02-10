import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Error from './pages/Error';
import Home from './pages/Home';
import Events, { loader as eventsLoader } from './pages/Events';
import EventDetail from './pages/EventDetail';
import NewEvent from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';

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
						{ path: ':eventId', element: <EventDetail /> },
						{ path: 'new', element: <NewEvent /> },
						{ path: ':eventId/edit', element: <EditEvent /> },
					],
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
