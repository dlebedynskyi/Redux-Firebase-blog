import test from 'ava';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import construct from '../src/app/routes';
import App from '../src/app/containers/App';
import Home from '../src/app/containers/Home';
import About from '../src/app/containers/About';
import urls from '../src/app/constants/routes';
chai.use(dirtyChai);

test('routes define root', () => {
	const routes = construct();
	chai.expect(routes).to.exist();
	chai.expect(routes).to.be.an('object');
	chai.expect(routes.path).to.equal('/');
	chai.expect(routes.component).to.equal(App);
	chai.expect(routes.indexRoute).to.be.an('object');
	chai.expect(routes.indexRoute.onEnter)
		.to.be.a('function', 'must have on enter redirect');
});

test('routes should have child routes', () => {
	const routes = construct();
	chai.expect(routes).to.exist();
	chai.expect(routes.childRoutes).to.be.an('Array');
	chai.expect(routes.childRoutes.length).to.equal(2);
});

test('routes should have Home route', () => {
	const routes = construct();
	chai.expect(routes).to.exist();
	chai.expect(routes.childRoutes).to.be.an('Array');
	const home = routes.childRoutes.find(e => e.path === urls.HOME);
	chai.expect(home).to.be.an('object');
	chai.expect(home.component).to.equal(Home);
});

test('routes should have About route', () => {
	const routes = construct();
	chai.expect(routes).to.exist();
	chai.expect(routes.childRoutes).to.be.an('Array');
	const home = routes.childRoutes.find(e => e.path === urls.ABOUT);
	chai.expect(home).to.be.an('object');
	chai.expect(home.component).to.equal(About);
});
