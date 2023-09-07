import axios from 'axios'
import { takeLatest, put} from 'redux-saga/effects';

function* gender(action){
    console.log('in  HERE', action.payload)
    try{
        const gender = yield axios.get(`/api/searchGender`,{
            params: action.payload
        })
        yield put({type:'GET_SEARCH', payload: gender.data})

    }catch(error){
        console.log('Error with the GET gender:', error)
    }

}

function* searchGender(){
    yield takeLatest('GENDER', gender)

}

export default searchGender;