import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { NaviBar } from './navbar/Navibar';
import React, {Component} from "react";
import mainApi from "./coins/MainApi"
import {Home} from './main/Home';
import {About} from './about/About';


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

<div className="container-fluid p-0">
<Router>
  <NaviBar/>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/coins" component={mainApi} />
    <Route exact path="/about" component={About} />

  </Switch>


</Router>



</div>   
)
        }
     }

    export default Main;
