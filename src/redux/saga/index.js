import {fork} from 'redux-saga/effects';
import * as auth from './AuthSagas'

export default function* rootSaga() {
	yield fork(auth.handleFetchLoginState);
	yield fork(auth.handleLogin);
	yield fork(auth.handleLogout);

}

//https://github.com/redux-saga/redux-saga/blob/master/README_ja.md
//Todo 実装する
