import { takeLatest, put} from "redux-saga/effects";
import axios from 'axios'

function* getAllMembers(){
    const allMembers = yield axios.get('/api/getAllMembers');
    console.log('All members:', allMembers.data);
    yield put({
        type: 'ALL_MEMBERS',
        payload: allMembers.data
    })
}

function* getAllMembersSaga(){
    yield takeLatest('GET_ALL_MEMBERS', getAllMembers)
}

export default getAllMembersSaga;