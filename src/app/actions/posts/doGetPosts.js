import { database } from '../../services/firebase';
import doSavePosts from './doSavePosts';
import {toList} from './mapping';

const doGetPosts = () => (dispatch) => {
  const posts = database().ref('posts');
  const query = posts.limitToLast(100);

	query.once('value')
		.then((result) => {
			const val = result.val() || {};
			const list = toList(val);
			dispatch(doSavePosts(list));
  });
};

export default doGetPosts;
