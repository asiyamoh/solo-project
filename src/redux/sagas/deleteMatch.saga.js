import  {takeLatest} from "redux-saga/effects";
import axios from 'axios'

function* deleteMatch(action){
    try{
        console.log('THE DELETE:', action.payload)
        yield axios.delete()

    }catch(error){
        console.log('ERROR with the DELETE match:', error);
    }
}

function* deleteMatchSaga(){
    yield takeLatest('HANDLE_DECLINE', deleteMatch)
}

export default deleteMatchSaga