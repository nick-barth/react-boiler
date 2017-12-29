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
		item: React.PropTypes.object,
		totalVotes: React.PropTypes.number,
		upVotePercent: React.PropTypes.number
	};

	render () {
		const { upVotePercent } = this.props;

	//Change the color of the bar depending on upVotePercent's value.
		const barColor = upVotePercent > 60 ? '2EAF21' : upVotePercent > 40 ? 'D67428' : 'd22730';

		return (
			<div className="line-graph-wrapper">
				<div className="line-graph">
					<div
						style={{ 'width': `${upVotePercent}%`, 'background': `#${barColor}` }}
						className="line-graph__up-vote-percent"
					>
						<div
							style={{ 'transform': `translateX(${upVotePercent < 5 ? 1 : -.2}rem)` }}
							className="line-graph__up-vote-percent-text"
						>
							{upVotePercent}%
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Linegraph;
