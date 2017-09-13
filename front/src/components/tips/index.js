/*
 * Dependencies
 */

// Vendors
import React from 'react';

/*
 * LIST
 * ====
 */


class Matchup extends React.Component {


	static propTypes = {
		list: React.PropTypes.array.isRequired,
		title: React.PropTypes.string.isRequired,
		records: React.PropTypes.array.isRequired,
		onChange: React.PropTypes.func.isRequired,
		champion: React.PropTypes.object.isRequired
	};

	constructor (props) {
		super(props);
	}



	render () {
		const { list, title, records, onChange, champion } = this.props;

		return (
			<div className="list">
				<div className="list__title">
					{title}
				</div>
				<div className="list__list">
					{list.map(item => {
						const duplicates = records.filter(record => record.includes(item.name) && record.includes(champion.name));
						const canVote = duplicates.length === 0;

						return (
							<div className="list__item" key={item.author}>
								<div className="list__item-name">
									{item.tip}
								</div>
								<div className="list__item-up" onClick={canVote ? onChange(item, 1) : null}>
									{item.up}
								</div>
								<div className="list__item-down">
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
