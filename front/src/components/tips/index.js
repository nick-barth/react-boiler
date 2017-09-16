/*
 * Dependencies
 */

// Vendors
import React from 'react';

import Form from 'components/form/index.js';
import Button from 'components/button/index.js';

/*
 * MATCHUP
 * =======
 */


class Matchup extends React.Component {


	static propTypes = {
		list: React.PropTypes.array.isRequired,
		title: React.PropTypes.string.isRequired,
		records: React.PropTypes.array,
		onChange: React.PropTypes.func.isRequired,
		champion: React.PropTypes.object.isRequired
	};

	constructor (props) {
		super(props);

		this.state = {
			text: ''
		};
	}

	saveTip () {
		console.log('wow');
	}



	render () {
		const { title } = this.props;

		return (
			<div className="tips">
				<div className="tips__title">
					{title}
				</div>
				<Form
					onSubmit={e => {
						e.preventDefault();
						this.saveTip();
					}}
				>
					<Form.Input
						id="tip"
						type="longtext"
						value={this.state.text}
						onChange={val => this.setState({
							text: val
						})}
					/>
				</Form>
				<Button
					submit
					click={() => this.saveTip()}
				/>
			</div>
		);
	}
}

export default Matchup;
