/*
 * Dependencies
 */

// Vendors
import React from 'react';

import { formatChampName } from 'utils/championName.js';

/*
 * Banner
 * ===========
 */
class Banner extends React.Component {


	static propTypes = {
		champ: React.PropTypes.object.isRequired
	};

	constructor (props) {
		super(props);
	}

	render () {
		const { champ } = this.props;

		return (
			<header className="banner">
				<div className="banner__name">{champ.name}</div>
				<img className="banner__img" src={`../images/banner/banner-${formatChampName(champ.name)}.jpg`} />
			</header>
		);
	}
}

export default Banner;
