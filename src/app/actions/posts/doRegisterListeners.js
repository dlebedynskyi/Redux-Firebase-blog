import { database } from '../../services/firebase';

const doRegisterListeners = () =>
  () => {
    const posts = database.ref('posts');
    posts.off();

    posts.on('child_added', snapshot => {
      console.log('post added', snapshot);
    });

		posts.on('child_changed', snapshot => {
      console.log('post changed', snapshot);
    });

		posts.on('child_removed', snapshot => {
      console.log('post removed', snapshot);
    });
  };

export default doRegisterListeners;
