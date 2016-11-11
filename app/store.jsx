import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

export const store = createStore(rootReducer, applyMiddleware(createLogger(), thunkMiddleware));
