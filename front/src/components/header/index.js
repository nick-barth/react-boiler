/*
 * Dependencies
 */

// Vendors
import React from 'react';

/*
 * HEADER
 * ======
 */


class Header extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className="header">
                <div className="header__logo-text">
                    <span className="header__logo-emphasis">QUAKE</span><span className="header__logo-thinner">CHAMPSELECT</span>
                </div>
			</div>
		);
	}
}

export default Header;
