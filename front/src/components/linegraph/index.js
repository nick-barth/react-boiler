/*
 * Dependencies
 */

// Vendors
import React from 'react';

// Utils

/*
 * MATCHUPS
 * ========
 */
class Linegraph extends React.Component {

	static propTypes = {
		item: React.PropTypes.object
	};

	render () {
		const { item } = this.props;

	//Get the number of total votes.
		const totalVotes = item.up + item.down;

	//Divide the number of upvotes by total votes to get a decimal.
		const getDecimal = item.up / totalVotes;

	//Convert the decimal to a percentage to get the percentage of total votes that are upvotes.
		const upVotePercent = (item.up === item.down) ? 50 : getDecimal * 100;

	// const upVotePercent = (item.up === item.down) ? 50 : (Math.round(getDecimal * 100) / 100) * 100;
	//need to round decimal to the tenth
		return (
			<div className="line-graph">
				<div
					style={{ 'width': `${upVotePercent}%` }}
					className="line-graph__up-vote-percent"
				/>
				<div className="line-graph__text">
					<div className="line-graph__up-vote-percent-text">
						Upvotes: {upVotePercent}%
					</div>
					<div className="line-graph__total-votes-text">
						Total Votes: {totalVotes}
					</div>
				</div>
			</div>
		);
	}
}

export default Linegraph;
