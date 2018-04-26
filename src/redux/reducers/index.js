import { combineReducers } from 'redux';
import todo from './Todo';
import auth from './Authentication'

const rootReducer = combineReducers({
  todo,auth,
});

export default rootReducer;
