
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch} from "react-router-dom";
import  { NNM }  from "./Components/CaseStudies/NNM";
import  { RSI }  from "./Components/CaseStudies/RuralSourcing";
import  { Rheintech }  from "./Components/CaseStudies/Rheintech";
import  Layout  from "./Components/Layout";
import TokyoGhoul from "./Components/Demo/Draggable";
import IconDrag from "./Components/Demo/IconDrag";
import SurveyModal from './Components/Demo/SurveyModal';
import ServerLess from './Components/Demo/ServerLess';
import BouncingBlocks from './Components/Demo/bouncingBlocks';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(
    <HashRouter>
        <Switch>						
            <Route path="/" exact component={Layout}/>
            <Route path="/NNM" exact component={NNM}/>
            <Route path="/RSI" exact component={RSI}/>
            <Route path="/Rheintech" exact component={Rheintech}/>
            <Route path="/TokyoGhoul" exact component={TokyoGhoul}/>
            <Route path="/IconDrag" exact component={IconDrag}/>
            <Route path="/SurveyModal" exact component={SurveyModal}/>
            <Route path="/ServerLess" exact component={ServerLess}/>
            <Route path="/BouncingBlocks" exact component={BouncingBlocks}/>
        </Switch>	
    </HashRouter>,
    document.getElementById('app')
);

