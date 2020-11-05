import api from "../axios";
import {
  loginSuccessAction,
  loginErrorAction,
  registerSuccessAction,
  registerErrorAction,
} from "../actions/actionCreators";

import { AUTH_REQUEST, REGISTER_REQUEST } from "../actions/actionTypes";

import { call, put, takeLatest } from "redux-saga/effects";

export function* loginFlowSaga(action) {
  try {
    const result = yield call(
      api.User.login,
      action.payload.email,
      action.payload.password
    );
    yield put(loginSuccessAction(result.data));
  } catch (response) {
    console.log(response.err);
    yield put(loginErrorAction(response.err));
  }
}

export function* registerFlowSaga(action) {
  try {
    const result = yield call(
      api.User.register,
      action.payload.username,
      action.payload.email,
      action.payload.password
    );
    yield put(registerSuccessAction(result.data));
  } catch (response) {
    yield put(registerErrorAction(response.err));
  }
}

export default function* authSaga() {
  yield takeLatest(AUTH_REQUEST, loginFlowSaga);
  yield takeLatest(REGISTER_REQUEST, registerFlowSaga);
}
