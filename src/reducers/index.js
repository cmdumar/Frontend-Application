import { combineReducers } from 'redux';
import product from './product';
import fetching from './fetching';
import errors from './errors';

export default combineReducers({
  product,
  fetching,
  errors,
});
