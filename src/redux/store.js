import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import admin from './reducers/admin'
import posts from './reducers/post'

const store = createStore(
    combineReducers({ admin, posts}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store