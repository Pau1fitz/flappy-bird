import React, { Component } from 'react';
import Bird from './components/Bird';
import Column from './components/Column';
import './App.css';


class App extends Component {
	render() {
		return (
			<div>
				<Column />
				<Bird />
			</div>
		);
	}
}

export default App;
