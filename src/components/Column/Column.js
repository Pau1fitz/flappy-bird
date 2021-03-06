import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Column.css';

class Column extends Component {

	constructor(props) {
		super(props);
		this.state = {

			height: Math.floor(Math.random() * 61) + 70,
			left: props.start
		};
	}

	componentDidMount() {
		this.moveColumn();
	}

	moveColumn = () => {
		let intervalId = setInterval(() => {
			this.setState(prevState => {
				return {
					left: prevState.left - 1
				};
			}, this.checkPosition);

		}, 50);

		this.setState({
			intervalId
		});
	}

	checkPosition() {

		const { left, height } = this.state;

		let bird = document.querySelectorAll('.bird')[0];

		let gameHeight = document.getElementById('root').offsetHeight;

		if( parseInt(bird.style.top) <= height && Math.round(left) === 10 ||
				parseInt(bird.style.top) >= (gameHeight - height - 30) && Math.round(left) === 10
		) {
			this.props.gameOver();
		}

		// create new random size column when column has moved off screen
		if(left <= -7) {
			this.setState({
				left: 100,
				height: Math.floor(Math.random() * 120) + 50,
			});
		};
	}

	render(){

		const { height, left } = this.state;

		return(
			<div>
				<div style={{ height, left: left + '%' }} className='top-column' />
				<div style={{ height, left: left + '%' }} className='bottom-column' />
			</div>
		);
	}

}

Column.propTypes = {
	start: PropTypes.number,
	gameOver: PropTypes.bool
};

export default Column;
