/*
 * Dependencies
 */

// Vendors
import React from 'react';

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
                <div className="banner">
                    <div className="banner__name">{champ.name}</div>
                    <img className="banner__img" src={`../images/banner/banner-${champ.name.toLowerCase()}.jpg`} />
                </div>
		);
	}
}

export default Banner;
