import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import mongoReducer from './reducers/mongoReducer'
import profileReducer from './reducers/profileReducer'
import pageReducer from './reducers/pageReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
    page: pageReducer,
    profile: profileReducer,
    mongoDb: mongoReducer
}),
composeEnhancers( applyMiddleware(thunk) )
)

export default store