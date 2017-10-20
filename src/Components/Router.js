import React from 'react';
import { Router, Route, IndexRoute} from "react-router";
import { HashRouter} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import  Layout  from "./layoutMain";

const newHistory = createBrowserHistory();

export default class Root extends React.Component {
	render() {
		return (
			<div>
				<HashRouter history={newHistory}>
						<Route path="/" component={Layout} />
				</HashRouter>
			</div>
		);
	}  
}