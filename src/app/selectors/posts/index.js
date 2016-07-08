const getRoot = state => state.get('posts');

const getList = state => getRoot(state).get('list');

const getListByPage = (state) => {
 const root = getRoot(state);
 const skip = root.get('page') * root.get('size');
 return getList(state).skip(skip).take(root.get('size'));
};


const getCurrentPage = (state) => getRoot(state).get('page');
const getTotalPages = (state) => getRoot(state).get('totalPages');
const getTotal = (state) => getList(state).size;

export { getList, getListByPage, getCurrentPage, getTotalPages, getTotal};
