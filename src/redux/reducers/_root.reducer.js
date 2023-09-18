import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
// import addBoxer from './addBoxer.reducer'
import getReducer from './getBoxer.reducer';
import search from './searchGender.reducer'
import getSpecific from './getSpecificBoxer';
import editBoxer from './editBoxer.reducers';
import fightDates from './fightDates.reducer';
import RequestMatchInput from './RequestMatchInput.reducers';
import getRequest from './getRequest.reducer';
import incomingRequests from './incomingRequests.reducers';
import getUpcomingMatch from './getUpcomingMatch.reducer';
import getDeclineRequest from './getDeclineRequest.reducer';
import allMembers from './allMembers.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  // addBoxer,
  getReducer,
  search,
  getSpecific,
  editBoxer,
  fightDates,
  RequestMatchInput,
  getRequest,
  incomingRequests,
  getUpcomingMatch,
  getDeclineRequest,
  allMembers,

});

export default rootReducer;
