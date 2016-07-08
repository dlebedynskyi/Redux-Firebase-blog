import {SAVE_POSTS} from '../../constants/posts';

const doSavePosts = (posts) => ({
	type: SAVE_POSTS,
	payload: posts
});

export default doSavePosts;
