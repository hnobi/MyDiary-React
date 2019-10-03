import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import newEntryReducer from './newEntryReducer';
import authenticatedUserReducer from './authenticatedUserReducer';
import entriesReducer from './entriesReducer';
import selectedEntryReducer from './selectedEntryReducer';
import updateEntryReducer from './updateEntryReducer';
import userProfileReducer from './userDetailsReducer';

export default combineReducers({
  signupData: signupReducer,
  loginData: loginReducer,
  newEntryData: newEntryReducer,
  authenticatedUser: authenticatedUserReducer,
  entries: entriesReducer,
  selectedEntry: selectedEntryReducer,
  updateEntryData: updateEntryReducer,
  userProfile: userProfileReducer
});
