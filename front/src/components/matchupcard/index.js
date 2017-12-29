/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { Link } from 'react-router-dom';

// Utils
import { formatChampName } from 'utils/championName';

// Components
import Linegraph from 'components/linegraph/index.js';

/*
 * MATCHUPS
 * ========
 */
class MatchupCard extends React.Component {


	static propTypes = {
		item: React.PropTypes.object,
		onChange: React.PropTypes.func.isRequired,
		totalVotes: React.PropTypes.number.isRequired,
		upVotePercent: React.PropTypes.number.isRequired,
		canVote: React.PropTypes.bool.isRequired
	};

	constructor (props) {
		super(props);
		this.state = {
			isUpvoteClicked: false,
			isDownvoteClicked: false
		};
	}

	//Combines the onChange function with code that handles applying the active CSS for the upvote and downvote arrow's respectively.
	 castVote (value, upOrDown) {
		const { item, onChange, canVote } = this.props;
		const { isDownvoteClicked, isUpvoteClicked } = this.state;

		//If canVote is true, and isUpvoteClicked and isDownvoteClicked are false, then register the vote and change the state, which in turn applies the active styling.
		//Otherwise, do nothing.
		canVote && !isDownvoteClicked && !isUpvoteClicked ? (onChange(item, value), this.setState(prevState => ({
			[upOrDown]: !this.state[upOrDown]
		}))) : null;
	 }

	render () {
		const { item, totalVotes, upVotePercent } = this.props;
		const { isUpvoteClicked, isDownvoteClicked } = this.state;

		return (
			<div className="matchup-card">
				<div className="matchup-card__matchup-info">
					<div className="matchup-card__item" key={item.name}>
						<Link to={`/champion/${formatChampName(item.name)}`} className="matchup-card__link">
							<div style={{ 'backgroundImage': `url("../images/card/${formatChampName(item.name)}.jpg")` }} className="matchup-card__champ-img-container">
								<div className="matchup-card__champ-name">
									{item.name}
								</div>
							</div>
						</Link>
						<div className="matchup-card__vote">
							<div className="matchup-card__vote-container">
								<div
									style={{ 'background': `${isUpvoteClicked ? '#d22730' : 'transparent' }` }}
									className="matchup-card__vote-up-flex"
									onClick={() => { this.castVote(1, 'isUpvoteClicked', 'test'); }}
								>

									<img className="matchup-card__up-arrow" src="/images/icons/down-arrow.svg"/>
									<div className="matchup-card__item-up">
										{item.up}
									</div>
								</div>
								<div
									style={{ 'background': `${isDownvoteClicked ? '#d22730' : 'transparent' }` }}
									className="matchup-card__vote-down-flex"
									onClick={() => { this.castVote(0, 'isDownvoteClicked'); }}
								>

									<img className="matchup-card__down-arrow" src="/images/icons/down-arrow.svg"/>
									<div className="matchup-card__item-down">
										{item.down}
									</div>
								</div>
							</div>
							<div className="matchup-card__vote-details">
								<div className="matchup-card__upvote-percentage">
									NET SCORE: {item.up - item.down}
								</div>
							</div>
						</div>
					</div>

					<div className="matchup-card__details">
						<Linegraph item={item} totalVotes={totalVotes} upVotePercent={upVotePercent} />
					</div>
				</div>
		</div>
		);
	}
}

export default MatchupCard;
