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
			movie: {}
		};
	}

	handleChange (val) {
		this.setState({
			movie: val
		});
	}


	render () {
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
				{this.state.movie.Title ? (
					<MovieCard
						movie={this.state.movie}
					/>
				) : null}
				</div>
			</div>
		);
	}

}
