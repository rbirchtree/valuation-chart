import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Demo from './components/Demo';

/*import ReactChart from './components/ReactChart';
import FormData from './components/FormData';*/
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
		 			<Route exact path='/demo' component={Demo}/>
 					<Route exact path='/about' component={About}/>
		 		</Switch>
		      </div>
	      	</Router>
    );
  }
}

export default App;