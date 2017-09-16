/*
 * Dependencies
 */

// Vendors
import React from 'react';
import _ from 'lodash';

/*
 * BUTTON
 * ======
 */
class Button extends React.Component {


	static propTypes = {
		click: React.PropTypes.func.isRequired,
		submit: React.PropTypes.bool
	};

	constructor (props) {
		super(props);
	}

	handleClick (e) {
		const { click } = this.props;

		e.preventDefault();
		click();
	}

	render () {
		const { submit } = this.props;

		return (
			<button type={submit ? 'submit' : 'button'} onClick={e => this.handleClick(e)} ref="button">
				Submit
			</button>
		);
	}
}

export default Button;
