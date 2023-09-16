import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import addSaga from './addBoxer.saga';
import getSaga from './getBoxer.saga';
import deleteSaga from './deleteBoxer.saga';
import searchGender from './gender.saga';
import specificSaga from './specificBoxer';
import editSaga from './editBoxer.saga'
import datesSaga from './getDates.saga';
import requestMatch from './requestMatch.saga';
import getRequest from './getRequestMatch.saga';
import getIncomingRequest from './getIncomingRequest.saga';
import acceptRequestSaga from './acceptRequest.saga';
import declineRequestSaga from './declineRequest.saga';
import getUpcomingMatchSaga from './getUpcomingMatch.saga';
import getDeclineRequestsSaga from './getDeclineRequest.saga';
import happenedMatchSaga from './happenedMatch.saga';
import deleteMatchSaga from './deleteMatch.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    addSaga(),
    getSaga(),
    deleteSaga(),
    searchGender(),
    specificSaga(),
    editSaga(),
    datesSaga(),
    requestMatch(),
    getRequest(),
    getIncomingRequest(),
    acceptRequestSaga(),
    declineRequestSaga(),
    getUpcomingMatchSaga(),
    getDeclineRequestsSaga(),
    happenedMatchSaga(),
    deleteMatchSaga(),
    
    
  ]);
}
