/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from 'components/searchbar';
import MovieCard from 'components/moviecard';


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

	renderSearchResults () {
		const { search } = this.state;

		return search.map(movie => {
			return (
				<MovieCard
					key={movie.title}
					movie={movie}
				/>
			);
		});

	}


	render () {
		const { search } = this.state;

		return (
			<div className="layout">
				<div className="layout__container">
				</div>
			</div>
		);
	}

}
