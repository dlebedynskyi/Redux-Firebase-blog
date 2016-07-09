import reducer from '../reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import {fromJS} from 'immutable';
/**
 * Method to configure default store
 * @param initial - default store state
 * @returns configured redux store
 */
const configure = (initial, ...midlewares) => {
	const imDefault = fromJS(initial || {});
  const store = createStore(reducer, imDefault, compose(
		// thunk, promise and rest of middlewares
    applyMiddleware(thunk, ... midlewares),

		// configure dev tools for browser
    process.env.NODE_ENV === 'development' &&
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined' ?
    window.devToolsExtension() :
    f => f
  ));

  return store;
};

export default configure;
