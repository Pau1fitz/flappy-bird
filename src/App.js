import React, { Component } from 'react';
import Bird from './components/Bird';
import TopColumn from './components/TopColumn';
import './App.css';


class App extends Component {
	render() {
		return (
			<div className='app-container'>
				<TopColumn start={-2}/>
				<TopColumn start={50}/>
				<TopColumn start={75}/>
			</div>
		);
	}
}

export default App;
