/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { connect } from 'react-redux';

import Form from 'components/form/index.js';
import Button from 'components/button/index.js';

// Store
import { actions as championActions } from 'store/champion.js';

/*
 * MATCHUP
 * =======
 */

@connect(
	state => ({
		store: state
	}), {
		addTip: championActions.addTip
	}
)
class Tips extends React.Component {


	static propTypes = {
		title: React.PropTypes.string.isRequired,
		records: React.PropTypes.array,
		champion: React.PropTypes.object,
		matchup: React.PropTypes.array,
		addTip: React.PropTypes.func.isRequired
	};

	constructor (props) {
		super(props);

		this.state = {
			text: ''
		};
	}

	saveTip () {
		const { champion, addTip } = this.props;
		const { text } = this.state;

		addTip(champion.name, text);

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

export default Tips;
