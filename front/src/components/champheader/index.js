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
class ChampHeader extends React.Component {


	static propTypes = {
		champ: React.PropTypes.object.isRequired,
	};

	constructor (props) {
		super(props);
	}

	render () {
		const { champ } = this.props;

		return (
                <div className="champ-header">
                    <div className="champ-header__name">{champ.name}</div>				
                    <img className="champ-header__img" src={`../images/champheader/champheader-${champ.name.toLowerCase()}.jpg`} />				
                </div>
		);
	}
}

export default ChampHeader;
