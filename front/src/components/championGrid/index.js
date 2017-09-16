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

	
	render () {
		
		return (
			<div style={{ 'width': '100%', 'margin': 'auto' }}>
			{this.props.champions ? (
				<div className="champion-grid">
				{this.props.champions.map(champ => {
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

ChampionGrid.defaultProps = {
	champions: []
  };

ChampionGrid.propTypes = {
	champions: React.PropTypes.array.isRequired
  };
  