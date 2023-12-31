import { takeLatest, put} from "redux-saga/effects";
import axios from "axios";

function* acceptRequest(action) {
  console.log("action for acceptRequeest:", action.payload);
  try {
    yield axios.put(`/api/acceptRequest/${action.payload.fight_id}`, action.payload);
    yield put({
        type: 'GET_INCOMING_REQUEST'
    })
    yield put({
      type: 'GET_UPCOMING_MATCH'
    })
  } catch (error) {
    console.log("ERROR with the PUT accept request:", error);
  }
}

function* acceptRequestSaga() {
  yield takeLatest("ACCEPT_REQUEST", acceptRequest);
}

export default acceptRequestSaga;
