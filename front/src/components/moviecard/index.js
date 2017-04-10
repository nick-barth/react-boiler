/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { connect } from 'react-redux';
import { actions as userActions } from 'store/user.js';

/*
 * MOVIECARD
 * =========
 */

@connect(
state => ({
	likedList: state.user.likedList
}), {
	toggleLike: userActions.toggleLike
}
)
class MovieCard extends React.Component {

	static propTypes = {
		movie: React.PropTypes.object,
		likedList: React.PropTypes.array.isRequired
	};

	constructor (props) {
		super(props);

		console.log(props.likedList);

	}

	handleSave () {
		console.log('wow');

	}



	render () {
		const { movie } = this.props;

		return (
			<div className="moviecard">
				<div className="moviecard__result">
					<div className="moviecard__poster">
						{movie.Poster ? (
							<img src={`${movie.Poster}`} />
						) : null}
					</div>
					<div className="moviecard__info">
						<div className="moviecard__title">
							{movie.Title}
						</div>
						<div className="moviecard__date">
							{movie.Year}
						</div>
						<div className="moviecard__desc">
							{movie.Plot}
						</div>
						{movie.imdbRating ? (
							<div className="moviecard__rating">
								{movie.imdbRating}
							</div>
						) : null}
						<div className="moviecard__heart">
							<a href="#" onClick={this.handleSave}>
							  Save movie!
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieCard;
