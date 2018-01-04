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
		canVote: React.PropTypes.bool.isRequired,
		champ: React.PropTypes.object,
		reversed: React.PropTypes.bool.isRequired

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

		//If canVote is true, and isUpvoteClicked and isDownvoteClicked are false, then run the onChange function and change the state,
		//Which in turn applies the active styling. Otherwise, do nothing.
		canVote && !isDownvoteClicked && !isUpvoteClicked ? (onChange(item, value), this.setState(prevState => ({
			[upOrDown]: !this.state[upOrDown]
		}))) : null;
	 }

	render () {
		const { item, champ, reversed } = this.props;
		const { isUpvoteClicked, isDownvoteClicked } = this.state;

		return (
			<div className="matchup-card">
				<div className="matchup-card__matchup-info">
					<div className="matchup-card__item" key={item.name}>
						<Link to={`/champion/${formatChampName(champ.name)}/${formatChampName(item.name)}`} className="matchup-card__link">
							<div style={{ 'backgroundImage': `url("/images/card/${formatChampName(item.name)}.jpg")` }} className="matchup-card__champ-img-container">
								<div className="matchup-card__champ-name">
									{item.name}
								</div>
							</div>
						</Link>
						<div className="matchup-card__vote">
							<div className="matchup-card__vote-container">

							{/* Changes the color of the upvote button depending on whether or not reversed, isUpvoteClicked, and isDownvoteclicked are true or false.
							 Also disables pointer events after user votes. */}
								<div
									style={{
										'background': `${!reversed && isUpvoteClicked ?
										'#d22730' :
										reversed && isDownvoteClicked ?
										'#d22730' :
										 null }`,
										'pointerEvents': `${isDownvoteClicked || isUpvoteClicked ?
										'none' :
										'all' }`
									}}
									className="matchup-card__vote-up-flex"
									onClick={() => { reversed ? this.castVote(0, 'isDownvoteClicked') : this.castVote(1, 'isUpvoteClicked'); }}
								>
									<img className="matchup-card__up-arrow" src="/images/vote/down-arrow.svg"/>

								{/* If reversed is true, vote down instead of up */}
									<div className="matchup-card__item-up">
										{reversed ? item.down : item.up}
									</div>
								</div>

							{/* Changes color of downvote button. */}
								<div
									style={{
										'background': `${!reversed && isDownvoteClicked ?
										'#d22730' :
										reversed && isUpvoteClicked ?
										'#d22730' :
										 null}`,
										'pointerEvents': `${isDownvoteClicked || isUpvoteClicked ?
										'none' :
										'all' }`
									}}
									className="matchup-card__vote-down-flex"
									onClick={() => { reversed ? this.castVote(1, 'isUpvoteClicked') : this.castVote(0, 'isDownvoteClicked'); }}
								>
									<img className="matchup-card__down-arrow" src="/images/vote/down-arrow.svg"/>

							{/* If reversed is false, vote up instead of down */}
									<div className="matchup-card__item-down">
										{reversed ? item.up : item.down}
									</div>
								</div>
							</div>
							<div className="matchup-card__vote-details">

							{/* Show net votes after upvotes - downvotes or downvotes - upvotes if reversed is true. */}
								<div className="matchup-card__upvote-percentage">
									NET VOTES: {reversed ? item.down - item.up : item.up - item.down}
								</div>
							</div>
						</div>
					</div>
					<div className="matchup-card__details">
						<Linegraph
							item={item}
							reversed={reversed}
						/>
					</div>
				</div>
		</div>
		);
	}
}

export default MatchupCard;
