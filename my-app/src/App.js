import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Redirect,
	Prompt,
	Switch
} from 'react-router-dom';
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/SectionTwo';
import SectionThree from './Components/SectionThree';
import Header from './Components/Header';
import Footer from './Components/Footer';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Footer />
			</div>
		);
	}
}

export default App;
