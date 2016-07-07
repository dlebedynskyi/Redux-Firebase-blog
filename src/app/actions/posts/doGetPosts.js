import { database } from '../../services/firebase';

const doGetPosts = () => () => {
  const posts = database().ref('posts');
  const query = posts.limitToLast(100);
  query.once('value').then((result) => {
    console.log(result.val());
  });
};

export default doGetPosts;
