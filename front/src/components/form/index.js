/*
 * Dependencies
 */
import React from 'react';

import Input from './input/index.js';

/*
 * FORM
 * ====
 */
class Form extends React.Component {

	static propTypes = {
		children: React.PropTypes.node,
		onSubmit: React.PropTypes.func,
		isSubmitting: React.PropTypes.bool.isRequired
	};

	static defaultProps = {
		isSubmitting: false
	};

	static Input = Input;

	constructor (props) {
		super(props);
	}

	/*
	 *
	 */
	handleSubmit (e) {
		e.preventDefault();

		const { onSubmit, isSubmitting } = this.props;

		if (!isSubmitting && onSubmit) {
			onSubmit(e);
		}
	}

	render () {

		const { children } = this.props;

		return (
			
			<form onSubmit={e => this.handleSubmit(e)} className="form" action="" method="post">
				<div className="form__title">Submit a tip</div>
				{children}
			</form>
		);
	}
}

export default Form;
