import {SET_PAGE} from '../../constants/posts';
/**
 * Action to switch page in recent list
 * @param page - page number
 */
export default (page = 0) => ({type: SET_PAGE, payload: page});
