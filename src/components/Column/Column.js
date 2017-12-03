import React, { Component } from 'react';
import './Column.css';

class Column extends Component {

	state = {
		height: 120,
		right: 500
	}

	componentDidMount() {
		this.moveColumn();
	}

	moveColumn = () => {
		setInterval(() => {
			this.setState(prevState => {
				return {
					right: prevState.right + 1
				}
			})
		}, 10)
	}

	render(){

		const { height, right } = this.state;

		console.log(this.state)

		return(
			<div style={{height, right: right + 'px'}} className='column' />
		);
	}

}

export default Column;
