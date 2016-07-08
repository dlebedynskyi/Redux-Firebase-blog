const getRootList = state => state.getIn(['posts', 'recent']);
const getPost = state => state.getIn(['posts', 'byId']);

const getList = state => getRootList(state).get('list');

const getListByPage = (state) => {
 const root = getRootList(state);
 const skip = root.get('page') * root.get('size');
 return getList(state).skip(skip).take(root.get('size'));
};


const getCurrentPage = (state) => getRootList(state).get('page');
const getTotalPages = (state) => getRootList(state).get('totalPages');
const getTotal = (state) => getList(state).size;

const isFullLoaded = (state, id) => getPost(state).has(id);
const getFull = (state, id) => getPost(state).get(id);

export { getList, getListByPage, getCurrentPage, getTotalPages, getTotal, isFullLoaded, getFull};
