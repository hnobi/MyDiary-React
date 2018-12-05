import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import newEntryReducer from './newEntryReducer';
import authenticatedUserReducer from './authenticatedUserReducer';
import entriesReducer from './entriesReducer';

export default combineReducers({
  signupData: signupReducer,
  loginData: loginReducer,
  newEntryData: newEntryReducer,
  authenticatedUser: authenticatedUserReducer,
  entries: entriesReducer
});
