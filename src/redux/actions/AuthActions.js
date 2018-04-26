import type from '../types/AuthActionTypes'

/**
 * Authentication
 */
 export function fetchSignin(id,pass) {
 	return {type: type.FETCH_SIGNIN, id:id, pass:pass}
 }

 export function fetchSignout(user) {
 	return {type: type.FETCH_SIGNOUT}
 }

 export function signin(user) {
 	return {type: type.SIGNIN, user:user}
 }

 export function signout() {
 	return {type: type.SIGNOUT}
 }

 export function failSignin(message) {
   return {type: type.FAIL_SIGNIN, error:message}
 }

 export function fetchSigninState(){
	 return {type: type.FETCH_SIGNIN_STATE}

 }
