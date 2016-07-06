import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './common/configureStore';
import './styles/global.scss';

const initialState = window.INITIAL_STATE;
const store = configureStore(initialState);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
	document.getElementById('root'));
};

document.addEventListener('DOMContentLoaded', render, false);
