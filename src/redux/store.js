import { createStore, applyMiddleware } from 'redux'

// middleware - between action and root reducer -- catches action and moves it along

import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [logger]; //array

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store

