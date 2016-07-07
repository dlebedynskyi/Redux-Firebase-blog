import { signOut } from '../../services/auth';
import doSignoutStart from './doSignoutStart';
import doSignoutComplete from './doSignoutComplete';

const doSignout = () =>
	(dispatch) => {
		dispatch(doSignoutStart());
		return signOut()
			.then(() => dispatch(doSignoutComplete()));
	};

export default doSignout;
