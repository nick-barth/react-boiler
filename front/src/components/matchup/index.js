/*
 * Dependencies
 */

// Vendors
import React from 'react';

import API from 'api';

/*
 * MATCHUP
 * =======
 */


class Matchup extends React.Component {


	static propTypes = {
		champ: React.PropTypes.object.isRequired,
		list: React.PropTypes.array.isRequired,
		title: React.PropTypes.string.isRequired
	};

	constructor (props) {
		super(props);
	}

	/*
		<div className="list__item-image">
			<img className="list__item-src" src={`/images/card/${item.name.toLowerCase()}.jpg`}/>
		</div>
	*/

	upVote (item) {
		return function () {
			const { champ } = this.props;
			const update = {
				name: item.name,
				up: item.up + 1
			};

			API.matchup.updateMatchup(champ, update)
			.promise
			.then(res => {
				console.log(res);
			})
			.catch(res => {
				console.log(res);
				console.log('error');
			});
		};
	}

	downVote (item) {
		return function () {
			const update = {
				...item,
				up: item.up + 1
			};

			console.log(update);
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
								<div className="list__item-up" onClick={this.upVote(item).bind(this)}>
									{item.up}
								</div>
								<div className="list__item-down" onClick={this.downVote(item)}>
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
