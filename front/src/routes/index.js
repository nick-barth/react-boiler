/*
 * Dependencies
 */

// Vendors
import React from 'react';

/*
 * LAYOUT - INDEX
 * ==============
 */
export default class App extends React.Component {

	constructor (props) {
		super(props);

		

		this.state = {
			search: []
		};
	}

	render () {
		return (
			<div className="layout">
				<div className="layout__container">
				landing layout
				</div>
			</div>
		);
	}

}
