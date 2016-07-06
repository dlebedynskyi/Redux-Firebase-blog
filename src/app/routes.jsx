import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';

import urls from './constants/routes';

export default () => {
	const routes = {
		path: '/',
		component: App,
		indexRoute: {
			onEnter: (nextState, replace) => replace(urls.HOME),
		},
		childRoutes: [
			{
				path: urls.HOME,
				component: Home,
			},
			{
				path: urls.ABOUT,
				component: About,
			},
		],
	};
	return routes;
};
