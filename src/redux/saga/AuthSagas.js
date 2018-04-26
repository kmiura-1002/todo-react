import {take, put} from 'redux-saga/effects';
import {signin, signout, failSignin} from '../actions/AuthActions'
import type from '../types/AuthActionTypes'

export function* handleLogin() {
	while (true) {
		const action = yield take(type.FETCH_SIGNIN);
		//TODO: 認証処理
		//TODO: yield call(...)
		const error = null;
		const user = {
			isSignin: true,
			user: {
				id: action.id,
				name: 'hoge'
			},
			error: ''
		}
		action.pass = null;
		if (error) {
			yield put(failSignin(error));
			continue;
		}
		const jwt = 'jsonWebToken';
		localStorage.setItem('jwt', jwt);
		yield put(signin(user));

	}
}
export function* handleLogout() {
	while (true) {
		yield take(type.FETCH_SIGNOUT);
		console.log('handleLogout');
		localStorage.removeItem('jwt');
		yield put(signout());
	}
}

export function* handleFetchLoginState() {
	while (true) {
		yield take(type.FETCH_SIGNIN_STATE);
		console.log('handleFetchLoginState');
		const jwt = localStorage.getItem('jwt');

		if (jwt) {
			// const {payload, err} = yield call(superFetch, {
			// 	url: '/api/login/',
			// 	type: 'GET',
			// 	custom: {
			// 		headers: {
			// 			authorization: `Bearer ${jwt}`
			// 		}
			// 	}
			// });
			//
			// if (payload && !err) {
			// 	yield put(login(Object.assign({}, payload[0], {jwt})));
			// 	continue;
			// }
		}

		// yield put(failFetchingLoginState());
	}
}
