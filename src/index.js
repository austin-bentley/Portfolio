
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  store  from "./store";
import { HashRouter, Route, Switch} from "react-router-dom";
import  NNM  from "./Components/CaseStudies/NNM";
import  Rheintech  from "./Components/CaseStudies/Rheintech";
import  Slider  from "./Components/Demo/Slider";
import  Layout  from "./Components/layoutMain";
import TokyoGhoul from "./Components/Demo/Draggable";
import IconDrag from "./Components/Demo/IconDrag";
import SurveyModal from './Components/Demo/SurveyModal';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(
	<Provider store = {store}>
				<HashRouter>
					<Switch>						
						<Route path="/" exact component={Layout}/>
						<Route path="/Slider" exact component={Slider}/>
						<Route path="/NNM" exact component={NNM}/>
						<Route path="/Rheintech" exact component={Rheintech}/>
						<Route path="/TokyoGhoul" exact component={TokyoGhoul}/>
						<Route path="/IconDrag" exact component={IconDrag}/>
						<Route path="/SurveyModal" exact component={SurveyModal}/>
					</Switch>	
				</HashRouter>
	</Provider>,
	  document.getElementById('app')
);

