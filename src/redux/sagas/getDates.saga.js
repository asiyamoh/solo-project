import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios'


function* dates() {
    try {
        const dates = yield axios.get('/api/dates')
        console.log('dates:', dates.data)
        yield put({
            type: 'DATES',
            payload: dates.data
        })
    } catch (error) {
        console.log('Error with the GET dates', error)
    }
}

function* datesSaga() {

    yield takeLatest('GET_DATES', dates)
}

export default datesSaga;