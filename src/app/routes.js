import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Signin from './containers/Signin';
import urls from './constants/routes';
import {isAuthentificated} from './selectors/auth';

const requiredAuth = (getState) =>
 (nextState, replace) => {
		if (!isAuthentificated(getState())) {
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
		childRoutes: [
			{
				path: urls.HOME,
				component: Home,
				onEnter: requiredAuth(getState)
			},
			{
				path: urls.ABOUT,
				component: About,
			},
			{
				path: urls.SIGN_IN,
				component: Signin
			}
		],
	};
	return routes;
};
