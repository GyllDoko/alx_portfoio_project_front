import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [];
if (process.env.NODE_ENV !== 'production' && !process.env.STORE_LOG_DISABLE) {
    middlewares.push(logger)
}

export const Store = createStore(rootReducer, applyMiddleware(...middlewares));
export const Persistor = persistStore(Store);

export default { Store, Persistor };