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
	//Get the percentage of upvotes out of total votes
		const upVotePercent = (item.up === item.down) ? 50 : ((item.up / (item.up + item.down)).toFixed(4) * 100);

	//Changes the color of the bar depending on upVotePercent's value.
		const barColor = upVotePercent > 60 ? '2EAF21' : upVotePercent > 40 ? 'D67428' : 'd22730';

		return (
			<div className="line-graph-wrapper">
				<div className="line-graph">
					<div
						style={{ 'width': `${upVotePercent}%`, 'background': `#${barColor}` }}
						className="line-graph__up-vote-percent"
					>
						<div
							style={{ 'transform': `translateX(${upVotePercent < 23 ? 3.5 : -.2}rem)`, 'position': `${upVotePercent < 23 ? 'absolute' : 'relative'}` }}
							className="line-graph__up-vote-percent-text"
						>
							{upVotePercent}% UPVOTES
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Linegraph;
