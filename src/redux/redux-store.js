import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import headerReducer from './header-reducer';
import homeReducer from './home-reduser';


let state = combineReducers({
  headerPage: headerReducer,
  homePage: homeReducer
});

let store = createStore(state, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;