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
		reversed: React.PropTypes.bool.isRequired
	};

	render () {
		const { item, reversed } = this.props;
	//Get the percentage of upvotes out of total votes. If reversed is true, then we are actually getting the percentage of downvotes out of total votes.
		const upVotePercent = !reversed ?
		 (item.up === item.down) ?
		  50 :
		  ((item.up / (item.up + item.down)).toFixed(3) * 100) :
		   reversed ?
			(item.up === item.down) ?
			 50 :
			  ((item.down / (item.up + item.down)).toFixed(3) * 100) :
			  null;

	//Changes the color of the bar depending on upVotePercent's value.
		const barColor = upVotePercent > 60 ? '2EAF21' : upVotePercent > 40 ? 'D67428' : 'd22730';

		return (
			<div className="line-graph-wrapper">
				<div className="line-graph">
					<div
						style={{ 'width': `${upVotePercent}%`, 'background': `#${barColor}` }}
						className="line-graph__up-vote-percent"
					>

					{/* Changes the position of the upvote percent indicator depending on upvotePercents value */}
						<div
							style={{
								'transform': `translateX(${upVotePercent < 23 ?
								 4.1 :
								  -.2}rem)`,
								  'position': `${upVotePercent < 23 ?
									 'absolute' :
									  'relative'}`
							}}
							className="line-graph__up-vote-percent-text"
						>
							{upVotePercent.toFixed(1)}% UPVOTES
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Linegraph;
