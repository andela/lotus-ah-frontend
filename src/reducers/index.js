// redux library
import { combineReducers } from 'redux';

// reducers
import login from './login';
import auth from './auth';

/**
 * @desc combines all the reducers
*/
export default combineReducers({
  login,
  auth
});
