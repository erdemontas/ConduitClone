import api from "../axios";
import {
  articleSuccessAction,
  articleErrorAction,
} from "../actions/actionCreators";

import { ARTICLE_REQUEST } from "../actions/actionTypes";

import { call, put, takeLatest } from "redux-saga/effects";

export function* getArticlePreviewSaga(action) {
  try { 
    const result = yield call(api.Articles.getFeed);
    console.log('result in saga after call:' , result.data)
    yield put(articleSuccessAction(result.data));
  } catch (response) {
    console.log("Error :", response);
    yield put(articleErrorAction(response));
  } 
}

export default function* articleSaga() {
  yield takeLatest(ARTICLE_REQUEST, getArticlePreviewSaga);
}
