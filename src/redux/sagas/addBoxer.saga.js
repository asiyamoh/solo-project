import axios from 'axios'
import { takeLatest } from 'redux-saga/effects';

function* addBoxer(action) {
    console.log('In HERE!', action)
    try {
       const response = yield axios.post('/api/addBoxer', action.payload)
       console.log(response)
    } catch (error) {
        console.log('error with the POST', error)
    }
}

function* addSaga() {
    yield takeLatest('ADD_BOXER', addBoxer)
}

export default addSaga;