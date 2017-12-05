import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Bird.css';

class Bird extends Component {

	state = {
		top: 125,
		falling: true,
		transform: 0
	}

	componentDidMount(){
		document.body.addEventListener('mousedown', this.moveBird);
		document.body.addEventListener('mouseup', this.setFalling);

		this.handleDeadBird();

	}

	componentWillReceiveProps(nextProps) {

		if(nextProps.gameOver) {

			let gameHeight = document.getElementById('root').offsetHeight;

			document.body.removeEventListener('mousedown', this.moveBird);
			document.body.removeEventListener('mouseup', this.setFalling);

			let intervalId = setInterval(() => {
				if(this.state.top > gameHeight - 30) {
					this.setState({
						top: gameHeight - 30,
					});

					this.clearInterval();

				} else {
					this.setState(prevState => {
						return {
							top: prevState.top + 15,
							transform: 'rotate(20deg)'
						};
					});
				}
			}, 40);

			this.setState({
				intervalId
			});

		}
	}

	handleDeadBird = () => {
		let gameHeight = document.getElementById('root').offsetHeight;
		let intervalId = setInterval(() => {

			if(this.state.falling) {
				if(this.state.top > gameHeight - 30) {
					this.setState({
						top: gameHeight - 30,
					});

					this.props.gameOver();
					this.clearInterval();

				} else {
					this.setState(prevState => {
						return {
							top: prevState.top * 1.05,
							transform: 'rotate(20deg)'
						};
					});
				}
			}
		}, 50);

		this.setState({
			intervalId
		});
	}

	clearInterval = () => {
		clearInterval(this.state.intervalId);
	}

	setFalling = () => {
		this.setState({
			falling: true
		});
	}

	moveBird = () => {
		this.setState(prevState => {
			return {
				falling: false,
				top: prevState.top - 25,
				transform: 'rotate(-20deg)'
			};
		});
	}

	render() {

		const { top, transform } = this.state;

		return(
			<div style={{ top: top + 'px', transform}} className='bird' />
		);
	}

}

Bird.propTypes = {
	gameOver: PropTypes.func
};

export default Bird;
