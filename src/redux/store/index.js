import {compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../saga'

export default function createFinalStore() {
	const sagaMiddleware = createSagaMiddleware();
	const finalCreateStore = compose()(createStore);
	const store = finalCreateStore(rootReducer, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(rootSaga);

	return store;
}
