import { takeLatest, put} from "redux-saga/effects";
import axios from "axios";

function* getUpcomingMatch() {
    console.log('HEY from getUpcoming match!!');
  try {
    const upcoming = yield axios.get('/api/getUpcomingMatch')
    console.log("the upcoming matches:", upcoming.data);
    yield put({
        type:'GET_UPCOMING',
        payload: upcoming.data
    })
  } catch (error) {
    console.log("ERROR with the GET upcoming Matches:", error);
  }
}

function* getUpcomingMatchSaga() {
  yield takeLatest('GET_UPCOMING_MATCH', getUpcomingMatch);
}

export default getUpcomingMatchSaga;
