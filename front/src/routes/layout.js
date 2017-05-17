/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from 'components/searchbar';


/*
 * LAYOUT - INDEX
 * ============
 */
export default class LayoutIndex extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			search: []
		};
	}

	handleChange (val) {
		this.setState({
			search: val.Search
		});
	}

	render () {
		return (
			<div className="layout">
				<div className="layout__container">
				</div>
			</div>
		);
	}

}
