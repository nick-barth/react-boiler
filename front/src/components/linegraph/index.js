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

	//Changes the color of the bar depending on upVotePercent's value.
		const barColor = item.upVotePercent > 60 ? '2EAF21' : item.upVotePercent > 40 ? 'D67428' : 'd22730';

		return (
			<div className="line-graph-wrapper">
				<div className="line-graph">
					<div
						style={{ 'width': `${item.upVotePercent}%`, 'background': `#${barColor}` }}
						className="line-graph__up-vote-percent"
					>
						<div
							style={{ 'transform': `translateX(${item.upVotePercent < 5 ? 1 : -.2}rem)` }}
							className="line-graph__up-vote-percent-text"
						>
							{item.upVotePercent}%
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Linegraph;
