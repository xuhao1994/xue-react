import { combineReducers } from 'redux';
import list from '../../components/List/ListRedux';
import nav from '../../components/Nav/NavRedux';

export default combineReducers({
  list,
  nav,
})