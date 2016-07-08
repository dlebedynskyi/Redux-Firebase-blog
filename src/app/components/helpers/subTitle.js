import { toDisplayString } from '../../services/dates';

export default (item) => {
	const time = item.get('datetime') ?
		toDisplayString(item.get('datetime')) :
		'';
	const at = time ? ` on ${time}` : '';
	const text = `By ${item.get('username')} ${at}`;
	return text;
};
