import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Help from './components/Help/Help';
import BookingHome from './components/BookingHome/BookingHome';
import YourBooking from './components/YourBooking/YourBooking';

class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Switch>
						<Route path="/" exact strict component={Home} />
						<Route path="/about" exact strict component={About} />
						<Route path="/contact" exact strict component={Contact} />
						<Route path="/help" exact strict component={Help} />
						<Route path="/dashboard" exact strict component={BookingHome} />
						<Route path="/bookings" exact strict component={YourBooking} />
					</Switch>
				</Layout>		
			</div>
		);
	}
}

export default App;