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
					<div className="layout__title">
						The Movie Thing
					</div>
					<div className="layout__liked">
						<Link to="/profile">My Liked Movies</Link>
					</div>
					<SearchBar
						onChange={(val) => this.handleChange(val)}
					/>
					<div className="layout__grid">
						{search ? (
							this.renderSearchResults()
						) : null}
					</div>
				</div>
			</div>
		);
	}

}
