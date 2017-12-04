import React, { Component } from 'react';
import './Bird.css';

class Bird extends Component {

	state = {
		top: 0,
		falling: true,
		transform: 0
	}

	componentDidMount(){
		document.body.addEventListener('mousedown', this.moveBird);
		document.body.addEventListener('mouseup', this.setFalling);

		setInterval(() => {
			if(this.state.falling) {
				this.setState(prevState => {
					return {
						top: prevState.top + 5,
						transform: 'rotate(20deg)'
					}
				})
			}
		}, 500)
	}

	setFalling = () => {
		this.setState({
			falling: true
		})
	}

	moveBird = () => {
		this.setState(prevState => {
			return {
				falling: false,
				top: prevState.top - 25,
				transform: 'rotate(-20deg)'
			}
		});
	}

	render() {

		const { top, transform } = this.state;

		return(
			<div style={{ top: top + 'px', transform}} className='bird' />
		);
	}

}

export default Bird;
