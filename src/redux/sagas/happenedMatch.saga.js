import { takeLatest, put} from "redux-saga/effects";
import axios from "axios";

function* happenedMatch(action) {
  try {
    console.log("broosek:", action.payload.fight_id);
    yield axios.put(
      `/api/happenedMatch/${action.payload.fight_id}`,
      action.payload
    );
    yield put({
        type: 'GET_UPCOMING_MATCH'
    })
    
  } catch (error) {
    console.log("ERROR with the PUT happendMatch:", error);
  }
}

function* happenedMatchSaga() {
  yield takeLatest("HAPPENED_MATCH", happenedMatch);
}

export default happenedMatchSaga;
