
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  store  from "./store";
import { HashRouter, Route, Switch} from "react-router-dom";
import  NNM  from "./Components/NNM";
import  Rheintech  from "./Components/Rheintech";
import  Design  from "./Components/DesignWork";
import  Slider  from "./Components/Slider";
import  Layout  from "./Components/layoutMain";
import TokyoGhoul from "./Components/Draggable";
import IconDrag from "./Components/IconDrag";
import FacebookActivity from "./Components/FacebookActivity";

ReactDOM.render(
	<Provider store = {store}>
				<HashRouter>
					<Switch>						
						<Route path="/" exact component={Layout}/>
						<Route path="/Slider" exact component={Slider}/>
						<Route path="/NNM" exact component={NNM}/>
						<Route path="/Rheintech" exact component={Rheintech}/>
						<Route path="/Designs" exact component={Design}/>
						<Route path="/TokyoGhoul" exact component={TokyoGhoul}/>
						<Route path="/IconDrag" exact component={IconDrag}/>
						<Route path="/FacebookActivity" exact component={FacebookActivity}/>
					</Switch>	
				</HashRouter>
	</Provider>,
	  document.getElementById('app')
);

