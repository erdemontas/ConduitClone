import api from "../axios";
import {
  articleListSuccessAction,
  articleListErrorAction,
} from "../actions/actionCreators";

import { ARTICLELIST_REQUEST } from "../actions/actionTypes";

import { call, put, takeLatest } from "redux-saga/effects";

export function* getArticleListSaga(action) {
    try {
        //apiyi yazdiktan sonra bak
        const result = yield call(api.Articles.getFeed);    
        
    } catch (error) {
        yield put(articleListErrorAction(response))
    }

//   try { 
//     const result = yield call(api.Articles.getFeed);
//     console.log('result in saga after call:' , result.data)
//     yield put(articleSuccessAction(result.data));
//   } catch (response) {
//     console.log("Error :", response);
//     yield put(articleErrorAction(response));
//   } 
}

export default function* articleListSaga() {
  yield takeLatest(ARTICLELIST_REQUEST, getArticleListSaga);
}
