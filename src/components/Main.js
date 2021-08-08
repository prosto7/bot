import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { NaviBar } from './navbar/Navibar';
import React, {Component} from "react";
import mainApi from "./coins/MainApi"
import {Home} from './home/Home';
import {About} from './about/About';

import '../App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Nav,  

} from 'react-router-dom';


class Main extends Component {
    render() {
        return (
<div className="container-fluid p-0 main-container">

<Router>
  <NaviBar/>
  <Switch>
    <Route exact path="/bot" component={Home} />
    <Route exact path="/coins" component={mainApi} />
    <Route exact path="/about" component={About} />
  </Switch>
</Router>
</div> 
  
)
        }
     }

    export default Main;
