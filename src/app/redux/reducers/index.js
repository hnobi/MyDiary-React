import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import newEntryReducer from './newEntryReducer';

export default combineReducers({
  signupData: signupReducer,
  loginData: loginReducer,
  newEntryData: newEntryReducer
});
