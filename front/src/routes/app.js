/*
 * Dependencies
 */

// Vendors
import React from 'react';

// Components
import Header from '../components/header/index.js';
import Footer from '../components/footer/index.js';
import Adcontainer from '../components/adcontainer/index.js';
import Advertisement from '../components/advertisement/index.js';

/*
 * LAYOUT - INDEX
 * ==============
 */
export default class LandingLayout extends React.Component {

	/*
	 * Validate props
	 */
	static propTypes = {
		store: React.PropTypes.object,
		children: React.PropTypes.element

	};

	constructor (props) {
		super(props);

	}

	render () {
		return (
			<div className="grid">
				<Header />
				<Adcontainer location="ad-container-left">
					<Advertisement aspect="ad-vertical-example-1">
						ad example wow #1
					</Advertisement>
					<Advertisement aspect="ad-vertical-example-2">
						ad example wow #2
					</Advertisement>
				</Adcontainer>
				<div className="layout">
					<Adcontainer location="ad-container-horizontal">
						<Advertisement aspect="ad-horizontal-example">
							horizontal top ad omfg loool
						</Advertisement>
					</Adcontainer>
					{this.props.children}
					<Adcontainer location="ad-container-horizontal">
						<Advertisement aspect="ad-horizontal-example">
							horizontal bottom ad SO RICH
						</Advertisement>
					</Adcontainer>
				</div>
				<Adcontainer location="ad-container-right">
					<Advertisement aspect="ad-vertical-example-2">
						ad example wow #5
					</Advertisement>
					<Advertisement aspect="ad-vertical-example-1">
						ad example wow #6
					</Advertisement>
				</Adcontainer>
				<Footer />
			</div>
		);
	}
}
