import React, { Component } from 'react';
import './Columns.css';
import TopColumn from '../TopColumn';

class Columns extends Component {

	state = {
		height: Math.floor(Math.random() * 120) + 50,
		left: -20
	}

	componentDidMount() {
		// this.moveColumns();
	}

	moveColumns() {
		setInterval(() => {
			this.setState(prevState => {
				return {
					left: prevState.left - 1
				};
			});
		}, 100);
	}


	render(){


		const { left } = this.state;

		return(
			<div style={{transform: `translate(${left}px, 0)`}} className='column-container'>
				<TopColumn />
				<TopColumn />
				<TopColumn />
			</div>
		);
	}

}

export default Columns;
