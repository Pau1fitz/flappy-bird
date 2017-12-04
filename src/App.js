import React, { Component } from 'react';
import Bird from './components/Bird';
import TopColumn from './components/TopColumn';
import './App.css';


class App extends Component {

	state = {
		gameOver: false
	}

	gameOver = () => {
		for(let i = 0; i < 100; i++) {
			window.clearInterval(i);
		}

		this.setState({
			gameOver: true
		})
	}
	render() {
		return (
			<div className='app-container'>
				<Bird gameOver={this.state.gameOver} />
				<TopColumn gameOver={this.gameOver} start={25}/>
				<TopColumn gameOver={this.gameOver} start={50}/>
				<TopColumn gameOver={this.gameOver} start={75}/>
				<TopColumn gameOver={this.gameOver} start={99}/>
			</div>
		);
	}
}

export default App;
