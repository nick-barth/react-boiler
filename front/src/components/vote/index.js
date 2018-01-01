/*
 * Dependencies
 */

// Vendors
import React from 'react';

/*
 * MATCHUP
 * =======
 */
class Vote extends React.Component {

	static propTypes = {
		voteInfo: React.PropTypes.object.isRequired,
		canVote: React.PropTypes.bool.isRequired,
		downVote: React.PropTypes.func.isRequired,
		upVote: React.PropTypes.func.isRequired

	};

	constructor (props) {
		super(props);
		this.state = {
			upVoteClicked: false,
			downVoteClicked: false
		};
	}
	//pass onvote and combine into one method
	castVote (upOrDown) {
		const { upVote, downVote, canVote } = this.props;

		!this.state[upOrDown] && canVote ? this.setState(() => ({
			[upOrDown]: !this.state[upOrDown]
		})) : null;
		upOrDown === 'upVoteClicked' ? upVote() : downVote();
	}

	render () {
		const { voteInfo } = this.props;
		const { downVoteClicked, upVoteClicked } = this.state;

		return (
			<div className="vote-container">
				<div className="vote">
					<div className="vote__item-up" onClick={() => { this.castVote('upVoteClicked'); }}>
						<img className="vote__up-arrow" src={`/images/vote/${upVoteClicked ? 'up-arrow' : 'down-arrow'}.svg`}/>
						{voteInfo.up}
					</div>
					<div className="vote__item-down" onClick={() => {  this.castVote('downVoteClicked'); }}>
						<img className="vote__down-arrow" src={`/images/vote/${downVoteClicked ? 'up-arrow' : 'down-arrow'}.svg`}/>
						{voteInfo.down}
					</div>
				</div>
			</div>
		);
	}
}

export default Vote;
