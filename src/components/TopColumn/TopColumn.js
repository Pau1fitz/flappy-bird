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

		console.log('BIRD: ',bird.style.top)
		console.log('HEIGHT: ',height)

		if( parseInt(bird.style.top) <= height && Math.round(left) === 10 ) {
				this.props.gameOver();
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
			<div style={{ height, left: left + '%' }} className='column'>
				<div className='column-bottom' />
			</div>
		);
	}

}

TopColumn.propTypes = {
	start: PropTypes.number
};

export default TopColumn;
