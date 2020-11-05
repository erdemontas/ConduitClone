import authSaga from "./authSaga";
import articleSaga from "./articleSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        authSaga(),
        articleSaga()
    ])
}
