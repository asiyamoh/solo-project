import axios from 'axios'
import { put, takeLatest } from 'redux-saga/effects';

function* addBoxer(){
    yield axios.post('/api/addBoxer', )
}

function* addSaga(){
    yield takeLatest('ADD_BOXER', addBoxer)
}

export  default addSaga();