/*
 * Dependencies
 */

// Vendors
import React from 'react';

/*
 * TEXT
 * ====
 */
class MovieCard extends React.Component {

	static propTypes = {
		movie: React.PropTypes.object
	};

	constructor (props) {
		super(props);

	}

	render () {
		const { movie } = this.props;

		return (
			<div>
				<div className="searchbar__result">
					<div className="searchbar__poster">
						{movie.Poster ? (
							<img src={`${movie.Poster}`} />
						) : null}
					</div>
					<div className="searchbar__info">
						<div className="searchbar__title">
							{movie.Title}
						</div>
						<div className="searchbar__date">
							{movie.Year}
						</div>
						<div className="searchbar__desc">
							{movie.Plot}
						</div>
						{movie.imdbRating ? (
							<div className="searchbar__rating">
								{movie.imdbRating}
							</div>
						) : null}
					</div>
				</div>
			</div>
		);
	}
}

export default MovieCard;
