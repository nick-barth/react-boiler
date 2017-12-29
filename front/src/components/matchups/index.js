/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { Link } from 'react-router-dom';

// Utils
import { formatChampName } from 'utils/championName';

// Components
import MatchupCard from 'components/matchupcard/index.js';

/*
 * MATCHUPS
 * ========
 */
class Matchups extends React.Component {


	static propTypes = {
		champ: React.PropTypes.object,
		list: React.PropTypes.array.isRequired,
		title: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.func.isRequired,
		records: React.PropTypes.array.isRequired
	};

	constructor (props) {
		super(props);
	}

	render () {
		const { list, title, onChange, records, champ } = this.props;

		return (
			<div className="matchups">
				<div className="matchups__title">
					{title}
				</div>
				{list.map(item => {
					const duplicates = records.filter(record => record.champions.includes(item.name) && record.champions.includes(champ.name));
					const canVote = records.length === 0 || duplicates.length === 0;

					//Get total votes
					const totalVotes = item.up + item.down;

					//Get upvote percentage
					const upVotePercent = (item.up === item.down) ? 50 : (item.up / totalVotes).toFixed(4) * 100;

					return (
						<MatchupCard
							item={item}
							onChange={onChange}
							canVote={canVote}
							totalVotes={totalVotes}
							upVotePercent={upVotePercent}
						/>
					);
				})}
					<button className="matchups__show-more-btn">show more</button>
			</div>
		);
	}
}

export default Matchups;
