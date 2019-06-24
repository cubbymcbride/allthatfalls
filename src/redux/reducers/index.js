import { combineReducers } from 'redux'

import admin from './admin'
import posts from './post'

export default combineReducers({ admin, posts })