import { combineReducers } from 'redux';
import posts from './posts';
import cart from './cart';

//  combine both these reducers
export default combineReducers({
  posts,
  cart,
});