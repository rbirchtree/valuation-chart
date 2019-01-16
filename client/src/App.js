import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import About from './components/about';
import Navbar from './components/navbar';
import ReactChart from './components/reactChart';
import './App.css';
// work on nav bar //links to home and to chart
//work on home is basically nav bar
//work on chart
//add redux
class App extends Component {
  render() {
    return (
      		<Router>
		      <div className="App">
		 		<Navbar/>
		 		<Switch>
		 			<Route exact path='/chart' component={ReactChart}/>
 					<Route exact path='/about' component={About}/>
		 			<Route component={About}/>
		 		</Switch>
		      </div>
	      	</Router>
    );
  }
}

export default App;
