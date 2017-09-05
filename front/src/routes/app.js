/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from '../components/header/index.js';
import Footer from '../components/footer/index.js';

/*
 * LAYOUT - INDEX
 * ==============
 */
@connect(
	s => ({ store: s })
)
export default class LandingLayout extends React.Component {

	/*
	 * Validate props
	 */
	static propTypes = {
		store: React.PropTypes.object.isRequired,
		children: React.PropTypes.element
	};

	constructor (props) {
		super(props);

		console.log(props.store);

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
