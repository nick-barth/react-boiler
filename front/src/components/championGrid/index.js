/*
 * Dependencies
 */

// Vendors
import React from 'react';

// Components
import Card from 'components/card/index.js';

/*
 * LAYOUT - INDEX
 * ==============
 */
export default class ChampionGrid extends React.Component {
	static defaultProps = {
		champions: []
	};

	static propTypes = {
		champions: React.PropTypes.array.isRequired
	};

	render () {
		const icon = <object data="images/card/target.svg" type="image/svg+xml" className="card__hover-target" />;

		return (
			<div style={{ 'width': '100%', 'margin': 'auto' }}>
			{this.props.champions ? (
				<div className="champion-grid">
				{this.props.champions.map(champ => {
					return (
						<Card
							key={champ.id}
							champ={champ}
							icon={icon}
						/>
					);
				})}
				</div>
			) : null}
			</div>
		);
	}
}
