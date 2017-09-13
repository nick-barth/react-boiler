/*
 * Dependencies
 */

// Vendors
import React from 'react';

// API
import API from 'api';

// Components
import Card from 'components/card/index.js';

/*
 * LAYOUT - INDEX
 * ==============
 */
export default class ChampionGrid extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			champions: []
		};

	}

	componentWillMount () {
		API.champ.getChampions()
		.promise
		.then(res => {
			this.setState({
				champions: res.data
			});
		})
		.catch(res => {
			console.log(res);
			console.log('error');
		});
	}

	render () {
		const { champions } = this.state;

		return (
			<div style={{ 'width': '100%', 'margin': 'auto' }}>
			{champions ? (
				<div className="card__css-grid">
				{champions.map(champ => {
					return (
						<Card
							key={champ.id}
							champ={champ}
						/>
					);
				})}
				</div>
			) : null}
			</div>
		);
	}

}
