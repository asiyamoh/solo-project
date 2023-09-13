import { takeLatest, put } from "redux-saga/effects"
import axios from 'axios'

function* getRequestMatch() {
    try {
        const requests = yield axios.get('/api/getRequest')
        console.log('the requests:', requests.data)
        yield put({
            type: 'GET_REQUEST_MATCH',
            payload: requests.data
        })
    } catch (error) {
        console.log('ERROR with the GET request:', error)
    }

}

function* getRequest() {
    yield takeLatest('GET_REQUEST', getRequestMatch)
}

export default getRequest