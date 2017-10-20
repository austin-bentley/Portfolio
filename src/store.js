import { createStore, combineReducers, applyMiddleware } from "redux";
import {createLogger} from "redux-logger";
import { routerReducer, routerMiddleware } from 'react-router-redux';
import activeReducer from "./reducers/activeReducer";
import createBrowserHistory from 'history/createBrowserHistory';
const newHistory = createBrowserHistory();
const middleware = routerMiddleware(newHistory);

export default createStore(combineReducers({
			activeReducer, router: routerReducer
			}),
		 	{},
		 	applyMiddleware(createLogger(),middleware)
		 	);


