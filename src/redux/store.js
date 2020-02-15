import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";

const reducers = combineReducers({
    appData: appReducer,
    form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;