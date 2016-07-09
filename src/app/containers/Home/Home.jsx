import React from 'react';
import ImProp from 'react-immutable-proptypes';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import pure from 'recompose/pure';
import lifecycle from 'recompose/lifecycle';

import styles from './home.scss';
import {Short} from '../../components/Post';
import Pagination from '../../components/Pagination';

import urls from '../../constants/routes';
import doGetRecentPosts from '../../actions/posts/doGetRecentPosts';
import doSetPage from '../../actions/posts/doSetPage';

import posts from '../../selectors/posts';

const mapStateToProps = (state) => ({
	page: posts.getListByPage(state),
	current: posts.getCurrentPage(state),
	total: posts.getTotalPages(state),
	totalPosts: posts.getTotal(state)
});

const mapDispatchToProps = (dispatch) => ({
	getPosts: () => dispatch(doGetRecentPosts()),
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
		toFullPost: ({router}) => (item) => {
			const title = encodeURIComponent(item.get('title'));
			router.push(`${urls.POST}/${item.get('id')}/${title}`);
		}
	}), pure);

const Home = ({page, current, total, navigateTo, toFullPost}) => (
	<div className={styles.container}>
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

export {hoc, Home};
export default hoc(Home);
