
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import rol from './rol';

export default combineReducers({
  routing,
  rol
});
