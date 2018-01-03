/*
 * Dependencies
 */

// Vendors
import React from 'react';

// Components
import Card from 'components/card/index.js';
import Adcontainer from 'components/adcontainer/index.js';
import Advertisement from 'components/adcontainer/advertisement/index.js';
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

		return (
			<section style={{ 'display': 'flex', 'paddingTop': '5rem' }}>
				<Adcontainer classes="ad-container">
					<Advertisement classes="ad-vertical-example-2">
						ad example wow #5
					</Advertisement>
					<Advertisement classes="ad-vertical-example-1">
						ad example wow #6
					</Advertisement>
				</Adcontainer>
				{!isLoading && champions ? (
					<div className="champion-grid">
					{champions.map(champ => {
						return (
							<Card
								key={champ.id}
								champ={champ}
							/>
						);
					})}
					</div>
				) : <Spinner />}
				<Adcontainer classes="ad-container">
					<Advertisement classes="ad-vertical-example-2">
						ad example wow #5
					</Advertisement>
					<Advertisement classes="ad-vertical-example-1">
						ad example wow #6
					</Advertisement>
				</Adcontainer>
			</section>
		);
	}
}
