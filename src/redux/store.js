import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
// middleware - between action and root reducer -- catches action and moves it along

import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [logger]; //array

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

// persisted version of store
export const persistor = persistStore(store)

export default { store, persistStore }

