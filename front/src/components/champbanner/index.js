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
class ChampBanner extends React.Component {


	static propTypes = {
		champ: React.PropTypes.object.isRequired,
	};

	constructor (props) {
		super(props);
	}

	render () {
		const { champ } = this.props;

		return (
                <div className="champ-banner">
                    <div className="champ-banner__name">{champ.name}</div>				
                    <img className="champ-banner__img" src={`../images/champbanner/champbanner-${champ.name.toLowerCase()}.jpg`} />				
                </div>
		);
	}
}

export default ChampBanner;
