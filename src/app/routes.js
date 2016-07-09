import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Signin from './containers/Signin';
import Create from './containers/Create';
import Post from './containers/Post';
import Edit from './containers/Edit';

import urls from './constants/routes';
import { isAuthentificated } from './selectors/auth';

const requiredAuth = (getState) =>
	(nextState, replace) => {
		if (!isAuthentificated(getState())) {
			replace(urls.SIGN_IN);
		}
	};
const requireNoAuth = (getState) =>
	(nextState, replace) => {
		if (isAuthentificated(getState())) {
			replace(urls.SIGN_IN);
		}
	};
export default (getState) => {
	const routes = {
		path: '/',
		component: App,
		indexRoute: {
			onEnter: (nextState, replace) => replace(urls.HOME),
		},
		childRoutes: [{
				path: urls.HOME,
				component: Home
			},
			{
				path: urls.ABOUT,
				component: About,
			},
			{
				path: urls.CREATE,
				component: Create,
				onEnter: requiredAuth(getState)
			},
			{
				path: `${urls.EDIT}/:id`,
				component: Edit,
				onEnter: requiredAuth(getState)
			},
			{
				path: urls.SIGN_IN,
				component: Signin,
				onEnter: requireNoAuth(getState)
			},
			{
				path: `${urls.POST}/:id`,
				component: Post
			},
			{
				path: '*',
				component: Home
			}
		],
	};
	return routes;
};
