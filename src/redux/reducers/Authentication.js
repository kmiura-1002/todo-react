import actionType from '../types/AuthActionTypes'
import initialState from '../state/ToDoState'

export default function auth(state = initialState, action) {
	switch (action.type) {
		case actionType.SIGNIN:
			{
				const _auth = action.user;
				console.log(_auth);
				console.log(state);
				return Object.assign({}, state, {
					auth: _auth
				});
			}

		case actionType.SIGNOUT:
			{
				const _auth = initialState;
				return Object.assign({}, state, {
					auth: _auth
				});
			}
		case actionType.FAIL_SIGNIN:
		{
			const _auth = initialState;
			_auth.error = action.error;
			return Object.assign({}, state, {
				auth: _auth
			});
		}
		default:
			return state;
	}
}
