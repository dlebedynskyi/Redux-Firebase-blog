import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import configureStore from './common/configureStore';
import buildRoutes from './routes';
import config from 'appSettings'; //eslint-disable-line
import './styles/global.scss';
import {init} from './services';

const initialState = Object.assign({}, config || {}, window.INITIAL_STATE || {});

const store = configureStore(initialState, routerMiddleware(browserHistory));

const routes = buildRoutes(store.getState);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: state => state.get('routing').toJS()
});

const root = document.getElementById('root');
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
    <Router routes={routes} history={history}/>
  </Provider>, root);
};

document.addEventListener('DOMContentLoaded', () => {
  init(store.dispatch, store.getState).then(() => {
    render();
  }).catch((e) => {
    console.error('app failed to init', e);
  });
}, false);
