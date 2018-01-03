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
			upVote: false,
			downVote: false
		};
	}
	//Call onVote and change the state depending on whether user upvoted or downvoted.
	castVote (upOrDown) {
		const { upVote, downVote } = this.props;

		upOrDown === 'upVote' ? (upVote()) : (downVote());
	}

	render () {
		const { voteInfo } = this.props;
		const { downVote, upVote } = this.state;

		return (
			<div className="vote-container">
				<div className="vote">
					<div className="vote__item-up" onClick={() => {
						this.castVote('upVote'); this.setState(() => ({
							upVote: true
						}));
					}}
					>
						<img className="vote__up-arrow" src={`/images/vote/${upVote ? 'up-arrow' : 'down-arrow'}.svg`}/>
						{voteInfo.up}
					</div>
					<div className="vote__item-down" onClick={() => {
						this.castVote('downVote'); this.setState(() => ({
							downVote: true
						}));
					}}
					>
						<img className="vote__down-arrow" src={`/images/vote/${downVote ? 'up-arrow' : 'down-arrow'}.svg`}/>
						{voteInfo.down}
					</div>
				</div>
			</div>
		);
	}
}

export default Vote;
