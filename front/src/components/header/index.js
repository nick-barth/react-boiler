/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { Link } from 'react-router-dom';

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
			  <nav className="header-container">
				<div className="header">
					<header className="logo">
						<img className="logo__img" src="/images/icons/logo.svg"/>
						<div className="logo__text">
							<span className="logo__text_emphasis">QUAKE</span>CHAMPSELECT
						</div>
					</header>
					<Link to={'/'}>
						<div className="header__button">
							<i className="fa fa-th header__button__icon" aria-hidden="true" />
							ALL CHAMPIONS
						</div>
					</Link>
				</div>
			</nav>

		);
	}
}

export default Header;
