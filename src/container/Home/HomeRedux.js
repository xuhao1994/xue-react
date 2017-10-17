import { combineReducers } from 'redux';
import list from 'components/List/ListRedux';
import nav from 'components/Nav/NavRedux';

export default combineReducers({
  list,
  nav,
})

export * as listActions from 'components/List/ListRedux';
export * as navActions from 'components/Nav/NavRedux';