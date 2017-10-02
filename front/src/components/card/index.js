/*
 * Dependencies
 */

// Vendors
import React from 'react';

import { Link } from 'react-router-dom';

/*
 * CARD
 * ====
 */


class Card extends React.Component {


	static propTypes = {
		champ: React.PropTypes.object.isRequired,
		icon: React.PropTypes.node.isRequired
	};

	constructor (props) {
		super(props);

	}

	render () {
		const { champ, icon } = this.props;

		return (
			<Link to={`/champion/${champ.name.toLowerCase()}`} className="card">
				<div className="card__overlay" />
				<div className="card__name">
					{champ.name}
				</div>
				<img className="card__bg" src={`images/card/${champ.name.toLowerCase()}.jpg`}/>
				<div className="card__tag-line">
					{champ.tagline}
					<div className="card__accent" />
				</div>
				{icon}
			</Link>

		);
	}
}

export default Card;
