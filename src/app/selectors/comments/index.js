const root = (state) => state.get('comments');

const getByPostId = (state, postId) => root(state).get(postId);
const areLoaded = (state, postId) => root(state).has(postId);

export { areLoaded, getByPostId };
