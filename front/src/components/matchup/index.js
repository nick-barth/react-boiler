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
			<div className="matchup-card">
				<div className="matchup-card__header">Matchups</div>
				<div className="matchup-card__title">
					
					{title}
				</div>
				<div className="matchup-card__list">
					{list.map(item => {
						const duplicates = records.filter(record => record.champions.includes(item.name) && record.champions.includes(champ.name));
						const canVote = records.length === 0 || duplicates.length === 0;

						return (
							<div className="matchup-card__container">
							<div className="matchup-card__champ-img-container">
								<img className="matchup-card__champ-img" src={`../images/card/${item.name.toLowerCase()}.jpg`} />
							</div>
							<div className="matchup-card__champ-name">
									{item.name}
							</div>
							<div className="matchup-card__item" key={item.name}>

								<div className="matchup-card__vote">
									<div className="matchup-card__item-up" onClick={canVote ? () => onChange(item, 1) : null}>
										{item.up}
									</div>
									<div className="matchup-card__item-down" onClick={canVote ? () => onChange(item, 0) : null}>
										{item.down}
									</div>
								</div>
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
