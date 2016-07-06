import { LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';

const initialState = fromJS({
	locationBeforeTransitions: null
});

export default (state = initialState, action) => {
  if (!action) { return state; }
  const { type, payload } = action;
	if (type === LOCATION_CHANGE) {
		return state.merge({
			locationBeforeTransitions: payload,
		});
	}

	return state;
};
