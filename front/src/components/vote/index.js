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
			<div className="vote-container">
				<div className="vote">
					<div className="vote__item-up" onClick={() => upVote()}>
						<img className="vote__up-arrow" src='../images/icons/up-arrow.svg'/>
						{voteInfo.up}
					</div>
					<div className="vote__item-down" onClick={() => downVote()}>
						<img className="vote__down-arrow" src="../images/icons/down-arrow.svg"/>
						{voteInfo.down}
					</div>
				</div>
			</div>
		);
	}
}

export default Vote;
