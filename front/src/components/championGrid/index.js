/*
 * Dependencies
 */

// Vendors
import React from 'react';

// Components
import Card from 'components/card/index.js';
import Spinner from 'components/spinner/index.js';

/*
 * LAYOUT - INDEX
 * ==============
 */
export default class ChampionGrid extends React.Component {
	static defaultProps = {
		champions: []
	};

	static propTypes = {
		champions: React.PropTypes.array.isRequired,
		isLoading: React.PropTypes.bool.isRequired
	};

	render () {
		const { isLoading, champions } = this.props;
		const icon = <img src="images/card/target.svg" type="image/svg+xml" className="card__hover-target" />;

		return (
			<div style={{ 'width': '100%', 'margin': 'auto' }}>
			{!isLoading && champions ? (
				<div className="champion-grid">
				{champions.map(champ => {
					return (
						<Card
							key={champ.id}
							champ={champ}
							icon={icon}
						/>
					);
				})}
				</div>
			) : <Spinner />}
			</div>
		);
	}
}
