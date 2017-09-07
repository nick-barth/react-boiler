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
		records: React.PropTypes.object.isRequired
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
						const duplicates = records.filter(record => {
							return record.includes(item.name) && record.includes(champ.name);
						});

						const canVote = duplicates.length === 0;

						console.log(canVote);
						return (
							<div className="list__item" key={item.name}>
								<div className="list__item-name">
									{item.name}
								</div>
								<div className="list__item-up" onClick={onChange(item, 1)}>
									{item.up}
								</div>
								<div className="list__item-down" onClick={onChange(item, 0)}>
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
