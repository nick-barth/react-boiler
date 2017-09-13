/*
 * Dependencies
 */

// Vendors
import React from 'react';
import _ from 'lodash';

/*
 * MATCHUP
 * =======
 */
class Matchup extends React.Component {


	static propTypes = {
		champ: React.PropTypes.object.isRequired,
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
			<div className="list">
				<div className="list__title">
					{title}
				</div>
				<div className="list__list">
					{list.map(item => {
						const duplicates = records.filter(record => record.champions.includes(item.name) && record.champions.includes(champ.name));
						const canVote = records.length === 0 || duplicates.length === 0;

						console.log('pedro direction is here:', duplicates[0]);

						return (
							<div className="list__item" key={item.name}>
								<div className="list__item-name">
									{item.name}
								</div>
								<div className="list__item-up" onClick={canVote ? onChange(item, 1) : null}>
									{item.up}
								</div>
								<div className="list__item-down" onClick={canVote ? onChange(item, 0) : null}>
									{item.down}
								</div>
							</div>
						);
					})}
				</div>

			</div>
		);
	}
}

export default Matchup;
