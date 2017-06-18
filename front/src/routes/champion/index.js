/*
 * Dependencies
 */

// Vendors
import React from 'react';
import API from 'api';

/*
 * LAYOUT - CHAMPION
 * =================
 */
export default class ChampionLayout extends React.Component {

	static propTypes = {
		match: React.PropTypes.object.isRequired
	};

	constructor (props) {
		super(props);

	}


	componentWillMount () {
		const champ = this.props.match.params.champion;

		API.champ.getChampion(champ)
		.promise
		.then(res => {
			this.champ = res.data;
		})
		.catch(res => {
			console.log(res);
		});

		API.champ.getMatchups(champ)
		.promise
		.then(res => {
			this.matchups = res.data;
		})
		.catch(res => {
			console.log(res);
		});
	}


	render () {
		return (
			<div className="layout">
				<div className="layout__container">
				champion index
				</div>
			</div>
		);
	}

}
