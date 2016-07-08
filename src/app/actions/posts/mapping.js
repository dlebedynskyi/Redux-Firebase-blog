import {List, fromJS} from 'immutable';
import moment from 'moment';

const toRecord = item => {
	const datetime = moment(item.datetime);
	return fromJS({
		...item,
		datetime: datetime.toDate()
	});
};

const toList = (items) => {
	const list = (Object.values(items) || []).map(toRecord);
	const mapped = new List(list);
	const ordered = mapped.sortBy(e => e.datetime);
	return ordered.reverse();
};

export {toRecord, toList};
