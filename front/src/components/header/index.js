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
			<div className="navbar-container">
				<div className="navbar">
					<div className="logo">
						<img className="logo__img" src='../images/icons/logo.svg'/>
						<div className="logo__text">
							<span className="logo__text_emphasis">QUAKE</span>CHAMPSELECT
						</div>
					</div>
					<Link to={'/'}>
						<div className="navbar__button">
							<img className="navbar__icon" src='../images/icons/champ-grid-icon.svg'/>
							ALL CHAMPIONS				
						</div>
					</Link>
				</div>
			</div>
			
		);
	}
}

export default Header;
