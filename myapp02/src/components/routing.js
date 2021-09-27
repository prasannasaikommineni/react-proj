import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';
import TwoWayBinding from './two-way-binding/two-way-binding';

// import './mystyles.css' ;


class Routing extends Component {
	render() {
		return (
			<Router>
				<div className="App"> 
					<nav className="navbar navbar-expand-sm bg-dark">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">About Us</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">Contact Us</Link>
							</li>
                            <li className="nav-item">
								<Link className="nav-link" to="/twobind">TWO WAY</Link>
							</li>
						</ul>
					</nav>
					<br></br>

					<Switch>
						<Route exact path='/' component={Home}></Route>
						<Route exact path='/about' component={About}></Route>
						<Route exact path='/contact' component={Contact}></Route>
                        <Route exact path='/twobind' component={TwoWayBinding}></Route>
					
					</Switch>
				</div>
			</Router>
		);
	}
}

export default Routing  ; 
