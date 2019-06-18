import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { searchRequest, searchSuccess, searchFailure } from './actions';

const series = handleActions(
  {
    [searchSuccess]: (_state, { payload }) => payload
  },
  []
);

const loading = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [searchFailure]: (_state, { payload }) => payload
  },
  null
);

export default combineReducers({
  series,
  loading,
  error
});
