import React from 'react';
import { Router, Route, IndexRoute} from "react-router";
import { NNM } from "./NNM";
import createBrowserHistory from 'history/createBrowserHistory';
import  Layout  from "./layoutMain";

const newHistory = createBrowserHistory();

export default class Root extends React.Component {
	render() {
		return (
			<div>
				<Router history={newHistory}>

						<Route path="/" component={Layout} />
				</Router>
			</div>
		);
	}  
}