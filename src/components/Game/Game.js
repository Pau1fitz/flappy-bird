import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TopColumn.css';

import Bird from './components/Bird';
import TopColumn from './components/TopColumn';

class Game extends Component {

	render() {

		<div>
			<Bird />
			<TopColumn start={25}/>
			<TopColumn start={50}/>
			<TopColumn start={75}/>
			<TopColumn start={99}/>
		</div>
	}



}

TopColumn.propTypes = {
	start: PropTypes.number
};

export default TopColumn;
