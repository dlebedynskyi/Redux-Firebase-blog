import {List, fromJS} from 'immutable';
import {toDate} from '../../services/dates';

const toRecord = item => {
	const datetime = toDate(item.datetime);
	return fromJS({
		...item,
		datetime
	});
};

const toList = (items) => {
	const list = (Object.values(items) || []).map(toRecord);
	const mapped = new List(list);
	// return mapped;
	return mapped.sortBy(e => e.get('datetime')).reverse();
};

export {toRecord, toList};
