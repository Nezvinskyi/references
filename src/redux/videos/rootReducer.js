import { combineReducers } from 'redux';
import videos from './videos-reducers';
import filters from './filter-reducer';

export default combineReducers({
  videos,
  filters,
});
