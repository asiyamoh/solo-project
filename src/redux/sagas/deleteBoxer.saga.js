import axios from 'axios'
import { takeLatest,  put} from 'redux-saga/effects';

function* deleteBoxer(action){
    try{
        console.log('action:', action.payload);
        yield axios.delete(`/api/deleteBoxer/${action.payload}`)
        yield put({type: 'GET_BOXER'})

    }catch(error){
        console.log('Error with the DELETE', error)
    }

}

function* deleteSaga(){
    yield takeLatest('DELETE_BOXER', deleteBoxer)

}

export default deleteSaga;