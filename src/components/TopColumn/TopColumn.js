import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TopColumn.css';

class TopColumn extends Component {

	constructor(props) {
		super(props);
		this.state = {
			height: Math.floor(Math.random() * 120) + 50,
			left: props.start
		};
	}

	componentDidMount() {
		this.moveColumn();
	}

	moveColumn = () => {
		setInterval(() => {
			this.setState(prevState => {
				return {
					left: prevState.left - 1
				};
			}, this.checkPosition);

		}, 50);
	}

	checkPosition() {


		const { left, height } = this.state;

		let bird = document.querySelectorAll('.bird')[0];

		if( parseInt(bird.style.top) <= height && Math.round(left) === 90 ) {
				console.log('GAME OVER');
		}
		
		if(left <= -3) {
			this.setState({
				left: 100,
				height: Math.floor(Math.random() * 120) + 50,
			});
		};
	}

	render(){

		const { height, left } = this.state;

		return(
			<div style={{ height, left: left + '%' }} className='column' />
		);
	}

}

TopColumn.propTypes = {
	start: PropTypes.number
};

export default TopColumn;
