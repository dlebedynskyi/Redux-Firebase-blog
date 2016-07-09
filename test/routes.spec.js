import test from 'ava';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import construct from '../src/app/routes';
import sinon from 'sinon';
import proxyquire from 'proxyquire';
import App from '../src/app/containers/App';
import Home from '../src/app/containers/Home';
import Post from '../src/app/containers/Post';
import Create from '../src/app/containers/Create';
import Edit from '../src/app/containers/Edit';
import About from '../src/app/containers/About';
import Signin from '../src/app/containers/Signin';
import urls from '../src/app/constants/routes';
chai.use(dirtyChai);

const editRoute = `${urls.EDIT}/:id`;
const postRoute = `${urls.POST}/:id`;

const shoudHaveAccessCheck = (url) => {
	test(
		`${url} should restriction and redirect to signin if not authentificated`,
		() => {
			const isAuthentificated = sinon.stub();
			const constructor = proxyquire('../src/app/routes', {
				'./selectors/auth': { isAuthentificated }
			}).default;

			const getState = sinon.stub();
			getState.returns('FAKE');
			isAuthentificated.withArgs('FAKE').returns(true);

			const routes = constructor(getState);
			chai.expect(routes).to.exist();
			chai.expect(routes.childRoutes).to.be.an('Array');
			const component = routes.childRoutes.find(e => e.path === url);
			chai.expect(component).to.be.an('object');
			chai.expect(component.onEnter).to.be.a('function');

			const replace = sinon.spy();
			component.onEnter(null, replace);
			chai.expect(replace.notCalled).to.be.true();
		});

		test(
			`${url} Create route should restriction and do not redirect if authentificated`,
			() => {
				const isAuthentificated = sinon.stub();
				const constructor = proxyquire('../src/app/routes', {
					'./selectors/auth': { isAuthentificated }
				}).default;

				const getState = sinon.stub();
				getState.returns('FAKE');
				isAuthentificated.withArgs('FAKE').returns(true);

				const routes = constructor(getState);
				chai.expect(routes).to.exist();
				chai.expect(routes.childRoutes).to.be.an('Array');
				const component = routes.childRoutes.find(e => e.path === url);
				chai.expect(component).to.be.an('object');
				chai.expect(component.onEnter).to.be.a('function');

				const replace = sinon.spy();
				component.onEnter(null, replace);
				chai.expect(replace.notCalled).to.be.true();
			});
};

test('routes: define root', () => {
	const routes = construct();
	chai.expect(routes).to.exist();
	chai.expect(routes).to.be.an('object');
	chai.expect(routes.path).to.equal('/');
	chai.expect(routes.component).to.equal(App);
	chai.expect(routes.indexRoute).to.be.an('object');
	chai.expect(routes.indexRoute.onEnter)
		.to.be.a('function', 'must have on enter redirect');
});

test('routes: should have child routes', () => {
	const routes = construct();
	chai.expect(routes).to.exist();
	chai.expect(routes.childRoutes).to.be.an('Array');
	chai.expect(routes.childRoutes.length).to.equal(7);
});

test('routes: should have Home route', () => {
	const routes = construct();
	chai.expect(routes).to.exist();
	chai.expect(routes.childRoutes).to.be.an('Array');
	const home = routes.childRoutes.find(e => e.path === urls.HOME);
	chai.expect(home).to.be.an('object');
	chai.expect(home.component).to.equal(Home);
});

test('routes: should have Create route', () => {
	const routes = construct();
	chai.expect(routes).to.exist();
	chai.expect(routes.childRoutes).to.be.an('Array');
	const home = routes.childRoutes.find(e => e.path === urls.CREATE);
	chai.expect(home).to.be.an('object');
	chai.expect(home.component).to.equal(Create);
});

test('routes: should have Edit route', () => {
	const routes = construct();
	chai.expect(routes).to.exist();
	chai.expect(routes.childRoutes).to.be.an('Array');

	const home = routes.childRoutes.find(e => e.path === editRoute);
	chai.expect(home).to.be.an('object');
	chai.expect(home.component).to.equal(Edit);
});

test('routes: should have Posts route', () => {
	const routes = construct();
	chai.expect(routes).to.exist();
	chai.expect(routes.childRoutes).to.be.an('Array');

	const home = routes.childRoutes.find(e => e.path === postRoute);
	chai.expect(home).to.be.an('object');
	chai.expect(home.component).to.equal(Post);
});

shoudHaveAccessCheck(editRoute);
shoudHaveAccessCheck(urls.CREATE);


test('routes: should have Signin route', () => {
	const routes = construct();
	chai.expect(routes).to.exist();
	chai.expect(routes.childRoutes).to.be.an('Array');
	const home = routes.childRoutes.find(e => e.path === urls.SIGN_IN);
	chai.expect(home).to.be.an('object');
	chai.expect(home.component).to.equal(Signin);
});

test('routes: should have About route', () => {
	const routes = construct();
	chai.expect(routes).to.exist();
	chai.expect(routes.childRoutes).to.be.an('Array');
	const home = routes.childRoutes.find(e => e.path === urls.ABOUT);
	chai.expect(home).to.be.an('object');
	chai.expect(home.component).to.equal(About);
});
