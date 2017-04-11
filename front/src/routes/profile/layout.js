/*
 * Dependencies
 */

// Vendors
import React from 'react';

import SearchBar from 'components/searchbar';


/*
 * LAYOUT - INDEX
 * ============
 */
export default class ProfileLayout extends React.Component {

	constructor (props) {
		super(props);

	}

	render () {
		return (
			<div className="layout">
				<div className="layout__container">
					<div className="layout__title">
						The Movie Thing 2
					</div>
				<SearchBar
					onChange={(val) => this.handleChange(val)}
				/>
				</div>
			</div>
		);
	}

}
