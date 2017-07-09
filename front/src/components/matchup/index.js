/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { connect } from 'react-redux';

// Store
import { actions as championActions } from 'store/champion.js';

/*
 * MATCHUP
 * =======
 */

@connect(
	state => ({
		store: state
	}), {
		matchUpdate: championActions.matchUpdate

	}
)
class Matchup extends React.Component {


	static propTypes = {
		champ: React.PropTypes.object.isRequired,
		list: React.PropTypes.array.isRequired,
		title: React.PropTypes.string.isRequired,
		matchUpdate: React.PropTypes.func.isRequired
	};

	constructor (props) {
		super(props);
	}

	/*
		<div className="list__item-image">
			<img className="list__item-src" src={`/images/card/${item.name.toLowerCase()}.jpg`}/>
		</div>
	*/

	vote (item, direction) {
		return function () {
			const { champ, matchUpdate } = this.props;

			if (direction) {
				const update = {
					name: item.name,
					up: item.up + 1
				};

				matchUpdate(champ, update);
			}
			else {
				const update = {
					name: item.name,
					down: item.down + 1
				};

				matchUpdate(champ, update);
			}

		};
	}

	render () {
		const { list, title } = this.props;

		return (
			<div className="list">
				<div className="list__title">
					{title}
				</div>
				<div className="list__list">
					{list.map(item => {
						return (
							<div className="list__item" key={item.name}>
								<div className="list__item-name">
									{item.name}
								</div>
								<div className="list__item-up" onClick={this.vote(item, 1).bind(this)}>
									{item.up}
								</div>
								<div className="list__item-down" onClick={this.vote(item, 0).bind(this)}>
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
