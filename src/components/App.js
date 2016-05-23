/**
 * Created by Ramon Serrano <ramon.calle.88@gmail.com>
 * Date: 5/23/16
 * Time: 10:18 AM
 */

import React from 'react';
import {browserHistory, Router, Route, Link} from 'react-router';
import {Layout, Header, Drawer, Content, Navigation, Textfield} from 'react-mdl';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

class AppRouter extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Home}></Route>
				<Route path="/about" component={About}></Route>
				<Route path="/contact" component={Contact}></Route>
				<Route path="*" component={NotFound}></Route>
			</Router>
		);
	}
}

class App extends React.Component {

	render() {
		return (
			<AppRouter></AppRouter>
		);
	}
}

export default App;