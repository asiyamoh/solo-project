import axios from 'axios'
import { takeLatest, put } from 'redux-saga/effects';

function* specific(action) {
    console.log('action id:', action.payload.id)
    try {
        const specificBoxer = yield axios.get(`/api/specific/${action.payload}`)
        console.log('one:', specificBoxer.data)
        yield put({
            type:'GET_SPECIFIC',
            payload: specificBoxer.data
        })
    } catch(error) {
        console.log('error with the GET specific', error)
    }

}

function* specificSaga() {
    yield takeLatest('SPECIFIC', specific);

}

export default specificSaga