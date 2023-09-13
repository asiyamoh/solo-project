import { takeLatest } from "redux-saga/effects";
import axios from "axios";

function* request(action){
    console.log('IN THE REQUEST', action)
    try{
        yield axios.post('/api/request', action.payload)

    }catch(error){
        console.log('error with the POST match', error)
    }

}

function* requestSaga(){
    yield takeLatest('REQUEST', request)
}

export default requestSaga;