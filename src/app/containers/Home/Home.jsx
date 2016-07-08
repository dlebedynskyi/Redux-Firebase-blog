import React from 'react';
import ImProp from 'react-immutable-proptypes';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import lifecycle from 'recompose/lifecycle';
import styles from './home.scss';

import {Short} from '../../components/Post';
import Pagination from '../../components/Pagination';
import doGetPosts from '../../actions/posts/doGetPosts';
import doSetPage from '../../actions/posts/doSetPage';

import {getListByPage, getCurrentPage, getTotalPages} from '../../selectors/posts';

const mapStateToProps = (state) => ({
	page: getListByPage(state),
	current: getCurrentPage(state),
	total: getTotalPages(state)
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(doGetPosts()),
  navigateTo: (page) => dispatch(doSetPage(page))
});

const hoc = compose(connect(mapStateToProps, mapDispatchToProps), lifecycle({
  componentDidMount() {
    const {getPosts} = this.props;
    getPosts();
  }
}), pure);

const Home = ({page, current, total, navigateTo}) => (
  <div className={styles.container}>
    <div className={styles.content}>
      {page && page.size
        ? page.map(e => (<Short key={`item_${e.get('id')}`} post={e} className={styles.post}/>))
        : null
}
    </div>
    <Pagination
      className={styles.pagination}
      current={current}
      total={total}
      navigateTo={navigateTo}/>
  </div>
);
Home.propTypes = {
  page: ImProp.list,
  current: React.PropTypes.number,
  total: React.PropTypes.number,
  navigateTo: React.PropTypes.func
};

export {Home};
export default hoc(Home);
