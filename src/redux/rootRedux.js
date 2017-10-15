import { combineReducers } from 'redux';
import home from '../container/Home/HomeRedux';
import nav from '../container/Home/HomeRedux.1';

export default combineReducers({
  home,
  nav
})