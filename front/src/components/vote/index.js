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
		upVote: React.PropTypes.func,
		downVote: React.PropTypes.func,
		canVote: React.PropTypes.bool
	};

	constructor (props) {
		super(props);
	}

	render () {
		const { voteInfo, upVote, downVote } = this.props;

		return (
			<div className="vote">
				<div className="vote__item-up" onClick={() => upVote()}>
					{voteInfo.up}
				</div>
				<div className="vote__item-down" onClick={() => downVote()}>
					{voteInfo.down}
				</div>
			</div>
		);
	}
}

export default Vote;
