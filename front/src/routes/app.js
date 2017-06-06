/*
 * Dependencies
 */

// Vendors
import React from 'react';

/*
 * LAYOUT - INDEX
 * ==============
 */
export default class LandingLayout extends React.Component {

	/*
	 * Validate props
	 */
	static propTypes = {
		children: React.PropTypes.element
	};

	constructor (props) {
		super(props);

		

		this.state = {
			search: []
		};
	}

	render () {
		return (
			<div className="layout">
			landing layout pass teh children
				<div className="layout__container">
				{this.props.children}
				</div>
			</div>
		);
	}

}
