/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MovieCard from 'components/moviecard';


/*
 * LAYOUT - INDEX
 * ============
 */
@connect(
	state => ({
		likedList: state.user.likedList
	})
)
export default class ProfileLayout extends React.Component {

	static propTypes = {
		likedList: React.PropTypes.array.isRequired
	};


	constructor (props) {
		super(props);

	}

	renderLikedMovies () {
		const { likedList } = this.props;

		return likedList.map(movie => {
			return (
				<MovieCard
					key={movie.title}
					movie={movie}
				/>
			);
		});

	}

	render () {
		return (
			<div className="layout">
				<div className="layout__container">
					<div className="layout__title">
						Movies I like
					</div>
					<div className="layout__liked">
						<Link to="/">Back to Search</Link>
					</div>
					<div className="layout__grid">
						{this.renderLikedMovies()}
					</div>
				</div>
			</div>
		);
	}

}
