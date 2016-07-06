import { LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';

const initialState = fromJS({
	locationBeforeTransitions: null,
});

export default (state = initialState, { type, payload }) => {
	if (type === LOCATION_CHANGE) {
		return state.merge({
			locationBeforeTransitions: payload,
		});
	}

	return state;
};
