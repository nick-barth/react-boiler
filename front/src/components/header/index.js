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
				<img className="header__logo" src={'images/main/logo.svg'}/>
                <div className="header__logo-text">
                    <span className="header__logo-emphasis">QUAKE</span>CHAMPSELECT
                </div>
			</div>
		);
	}
}

export default Header;
