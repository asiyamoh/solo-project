import { takeLatest } from "redux-saga/effects";

function* happenedMatch(){

}

function* happenedMatchSaga(){
    yield takeLatest('HAPPENED_MATCH', happenedMatch)
}

export default happenedMatchSaga;