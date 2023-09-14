import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* getIncomingRequest() {
  try {

    const incomingRequests = yield axios.get("/api/incomingRequest");
    console.log("incoming request:", incomingRequests.data);

    yield put({
        type: 'INCOMING_REQUESTS',
        payload: incomingRequests.data
    })

  } catch (error) {
    console.log("ERROR with the GET incoming requests", error);
  }
}

function* getIncomingRequestSaga() {
  yield takeLatest('GET_INCOMING_REQUEST', getIncomingRequest);
}

export default getIncomingRequestSaga;
