/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { Link } from 'react-router-dom';

/*
 * MATCHUP
 * =======
 */
class Matchup extends React.Component {


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

						return (
							<div className="matchups__matchup-card">
								<Link to={`/champion/${item.name.toLowerCase()}`} className="matchups__link">
									<div className="matchups__champ-name">
											{item.name}
									</div>


									<div className="matchups__champ-img-container">
										<img className="matchups__champ-img" src={`/images/card/${item.name.toLowerCase()}.jpg`} />

									</div>
								</Link>

								<div className="matchups__item" key={item.name}>

									<div className="matchups__vote">
										<div className="matchups__vote-up-flex" onClick={canVote ? () => onChange(item, 1) : null}>
											<img className="matchups__up-arrow" src="/images/icons/up-arrow.svg"/>
											<div className="matchups__item-up">
												{item.up}
											</div>
										</div>
										<div className="matchups__vote-down-flex" onClick={canVote ? () => onChange(item, 0) : null}>
											<img className="matchups__down-arrow" src="/images/icons/down-arrow.svg"/>
											<div className="matchups__item-down">
												{item.down}
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
					<button className="matchups__show-more-btn">show more</button>
			</div>
		);
	}
}

export default Matchup;
