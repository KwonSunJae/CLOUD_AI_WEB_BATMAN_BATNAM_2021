import { createAction, handleActions } from "redux-actions";
import { put, takeLatest } from "redux-saga/effects";

import { check, logout } from "../public/data";

const TRY_LOG_IN = "login/TRY_LOG_IN";
const TRY_LOG_OUT = "login/TRY_LOG_OUT";

// saga or thunk
const CHECK_LOGIN = "login/CHECK_LOGIN";
const LOGIN_SUCCESS = "login/LOGIN_SUCCESS";
const LOGIN_FAILED = "login/LOGIN_FAILED";
const LOGOUT_SUCCESS = "login/LOGOUT_SUCCESS";
const LOGOUT_FAILED = "login/LOGOUT_FAILED";

export const tryLogIn = createAction(TRY_LOG_IN, (form) => form);
export const tryLogOut = createAction(TRY_LOG_OUT);
export const checkLogin = createAction(CHECK_LOGIN);

const initState = {
  user: Object,
  isLogin: false,
  error: null,
};

function* tryLoginSaga(action) {
  const form = action.payload;
  try {
    const res = check(form);
    yield put({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILED,
      payload: e,
    });
  }
}

function* tryLogOutSaga() {
  try {
    logout();
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: LOGOUT_FAILED,
      payload: e,
    });
  }
}

function* checkLoginSaga() {
  const user = window.sessionStorage.getItem("user");
  if (user) {
    yield put({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  }
}

function loginSuccessSaga(action) {
  const user = action.payload;
  window.sessionStorage.setItem("user", user.id);
}

function logoutSuccessSaga() {
  window.sessionStorage.removeItem("user");
}

export function* loginSaga() {
  yield takeLatest(TRY_LOG_IN, tryLoginSaga);
  yield takeLatest(TRY_LOG_OUT, tryLogOutSaga);
  yield takeLatest(CHECK_LOGIN, checkLoginSaga);
  yield takeLatest(LOGIN_SUCCESS, loginSuccessSaga);
  yield takeLatest(LOGOUT_SUCCESS, logoutSuccessSaga);
}

export default handleActions(
  {
    [LOGIN_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user: user,
      isLogin: true,
      error: null,
    }),
    [LOGIN_FAILED]: (state, { payload: error }) => ({
      ...state,
      user: null,
      isLogin: false,
      error: error,
    }),
    [LOGOUT_SUCCESS]: (state) => ({
      ...state,
      user: null,
      isLogin: false,
      error: null,
    }),
    [LOGOUT_FAILED]: (state, { payload: error }) => ({
      ...state,
      isLogin: true,
      error: error,
    }),
  },
  initState
);
