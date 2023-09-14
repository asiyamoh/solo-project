import { takeLatest, put} from "redux-saga/effects";
import axios from 'axios'

function* declineRequest(action){
    console.log('Action with decline Request:', action.payload)
    try{
        yield axios.put('/api/declineRequest', action.payload);
        yield put({
            type:'GET_INCOMING_REQUEST'
        })
    }catch(error){
        console.log('ERROR with the PUT decline Request:', error)
    }

}

function* declineRequestSaga(){
    yield takeLatest('DECLINE_REQUEST', declineRequest)
}

export default declineRequestSaga;