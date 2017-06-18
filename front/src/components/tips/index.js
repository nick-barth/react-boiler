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
		title: React.PropTypes.string.isRequired
	};

	constructor (props) {
		super(props);
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
							<div className="list__item" key={item.author}>
								<div className="list__item-name">
									{item.tip}
								</div>
								<div className="list__item-up">
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
