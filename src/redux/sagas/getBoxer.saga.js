import axios from 'axios'
import { takeLatest, put } from 'redux-saga/effects';

function* getBoxer(){
    //storing the response from GET in boxer 
    const boxer = yield axios.get('/api/getBoxer')
    console.log('boxer:', boxer.data)

    //dispatching the response to the STORE
    yield put({ type: 'GET', payload: boxer.data})

}

function* getSaga(){
    yield takeLatest('GET_BOXER', getBoxer)

}

export default getSaga;