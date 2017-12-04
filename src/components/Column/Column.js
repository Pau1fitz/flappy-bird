import React, { Component } from 'react';
import './Column.css';

class Column extends Component {

	state = {
		height: 120,
		right: 0
	}

	componentDidMount() {
		this.moveColumn();
	}

	getColumnPosition = () => {

		const { height, right } = this.state;
		let bird = document.querySelectorAll('.bird')[0];


		if( parseInt(bird.style.top) <= height && Math.round(right) === 90 ) {
			console.log('GAME OVER')
		}
	}

	moveColumn = () => {
		setInterval(() => {

			const { right } = this.state;

			console.log(right)

			this.getColumnPosition();

			if(right > 95) {
				this.setState({
					right: 0
				})
			} else {
				this.setState(prevState => {
					return {
						right: prevState.right + 0.1
					}
				})
			}
		}, 5)
	}

	render(){

		const { height, right } = this.state;

		return(
			<div style={{height, right: right + '%'}} className='column' />
		);
	}

}

export default Column;
