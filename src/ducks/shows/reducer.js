import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  getShowRequest,
  getShowSuccess,
  getShowFailure
} from './actions';

const show = handleActions(
  {
    [getShowSuccess]: (_state, { payload }) => payload
  },
  {}
);

const loading = handleActions(
  {
    [getShowRequest]: () => true,
    [getShowSuccess]: () => false,
    [getShowFailure]: () => false
  },
  true
);

const error = handleActions(
  {
    [getShowFailure]: (_state, { payload }) => payload
  },
  null
);

export default combineReducers({
  show,
  loading,
  error
});
