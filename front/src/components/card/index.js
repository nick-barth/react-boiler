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
		champ: React.PropTypes.object.isRequired
	};

	constructor (props) {
		super(props);

	}

	render () {
		const { champ } = this.props;

		return (
			<Link to={`/champion/${champ.name.toLowerCase()}`} className="card">
				<div className="card__overlay"></div>
				<div className="card__name">
					{champ.name}
				</div>
				<img className="card__bg" src={`images/card/${champ.name.toLowerCase()}.jpg`}/>
				<object data="images/card/target.svg" type="image/svg+xml" className="card__hover-target"></object>				
				<div className="card__tag-line">
					{champ.tagline}
					<div className="card__accent"></div>				
				</div>
			</Link>
				
		);
	}
}

export default Card;
