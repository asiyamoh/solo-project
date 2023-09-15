import { takeLatest, put} from "redux-saga/effects"; 
import axios from 'axios';

function*  getDeclineRequests(){
    const declineRequests = yield axios.get('/api/getDeclineRequest')
    console.log('declineRequests:', declineRequests.data)
    yield put({
        type: 'GET_DECLINE',
        payload: declineRequests.data
    })
}

function* getDeclineRequestsSaga(){
    yield takeLatest('GET_DECLINE_REQUEST', getDeclineRequests)
}

export default getDeclineRequestsSaga;