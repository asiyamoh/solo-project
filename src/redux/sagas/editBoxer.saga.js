import axios from 'axios'
import { takeLatest, put } from 'redux-saga/effects';

function* edit(action) {
    try {
        console.log('In here')
        console.log('edit action:', action.payload)
        yield axios.put(`/api/editBoxer/${action.payload.id}`, action.payload)
        yield put({type:'EDIT_CLEAR'})
        
    } catch (error) {
        console.log('Error with the PUT', error)
    }

}

function* editSaga() {
    yield takeLatest('EDIT_SUBMIT', edit)
}

export default editSaga