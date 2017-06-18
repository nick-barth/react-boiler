/*
 * Dependencies
 */

// Vendors
import React from 'react';

// Components
import Header from '../components/header/index.js';
import Footer from '../components/footer/index.js';

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

	}

	render () {
		return (
			<div className="layout">
				<Header />
					{this.props.children}
				<Footer />
			</div>
		);
	}

}
