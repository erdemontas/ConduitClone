import  api  from "./axios";
import {
  loginRequestAction,
  loginSuccessAction,
  loginErrorAction,
} from "./actions/actionCreators";

import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
} from "./actions/actionTypes";

import { call, put, takeLatest } from "redux-saga/effects";

export function* loginFlow(action){
    try{
        console.log("Action in saga:",action.payload)
        const result = yield call(api.User.login, action.payload.email, action.payload.password );
        yield put(loginSuccessAction(result.data))

    }catch(response){
        console.log(response.err)
        yield put(loginErrorAction(response.err))
    }
}

export default function* rootSaga(){
    yield takeLatest(AUTH_REQUEST, loginFlow);
}