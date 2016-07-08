import React from 'react';
import ImProp from 'react-immutable-proptypes';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import pure from 'recompose/pure';
import lifecycle from 'recompose/lifecycle';
import styles from './home.scss';

import urls from '../../constants/routes';
import {Short} from '../../components/Post';
import Pagination from '../../components/Pagination';
import doGetPosts from '../../actions/posts/doGetPosts';
import doSetPage from '../../actions/posts/doSetPage';

import {
	getListByPage,
	getCurrentPage,
	getTotalPages,
	getTotal} from '../../selectors/posts';

const mapStateToProps = (state) => ({
	page: getListByPage(state),
	current: getCurrentPage(state),
	total: getTotalPages(state),
	totalPosts: getTotal(state)
});

const mapDispatchToProps = (dispatch) => ({
	getPosts: () => dispatch(doGetPosts()),
	navigateTo: (page) => dispatch(doSetPage(page))
});

const hoc = compose(
	connect(mapStateToProps, mapDispatchToProps),
	lifecycle({
		componentDidMount() {
			const {totalPosts, getPosts} = this.props;
			if (!totalPosts) { getPosts(); }
		}
	}),
	withRouter,
	withHandlers({
		toFullPost: ({router}) => (item) => router.push(`${urls.POST}/${item.get('id')}`)
	}), pure);

const Home = ({page, current, total, navigateTo, toFullPost}) => (
	<div className={styles.container}>
		<h2> Recent Posts </h2>
		<div className={styles.content}>
			<div>
				{page && page.size
					? page.map(e => (
						<Short
							key={`item_${e.get('id')}`}
							post={e}
							open={toFullPost}
							className={styles.post}/>))
					: null
				}
			</div>
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
	navigateTo: React.PropTypes.func.isRequired,
	toFullPost: React.PropTypes.func.isRequired
};

export {Home};
export default hoc(Home);
