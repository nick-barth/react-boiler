/*
 * Dependencies
 */

// Vendors
import React from 'react';

import SearchBar from 'components/searchBar';


/*
 * LAYOUT - INDEX
 * ============
 */
export default class LayoutIndex extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
		};
	}


	render () {


		return (
			<div className="layout">
				<div className="layout__container">
					<div className="layout__title">
						The Movie Thing
					</div>
				<SearchBar />
				</div>
			</div>
		);
	}

}
