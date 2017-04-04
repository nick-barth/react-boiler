/*
 * Dependencies
 */

// Vendors
import React from 'react';

/*
 * TEXT
 * ====
 */
class SearchBar extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className="searchbar">
				<div className="searchbar__icon">
				</div>
				<input className="searchbar__bar" type="text" name="search" />
			</div>
		);
	}
}

export default SearchBar;
