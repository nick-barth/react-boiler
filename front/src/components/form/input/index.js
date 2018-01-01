/*
 * Dependencies
 */

// Vendors
import React from 'react';
import ReactDOM from 'react-dom';

/*
 * PROPS SHAPES
 * ============
 */

/*
 * FORM INPUT
 * ==========
 */
class Input extends React.Component {

	static propTypes = {
		// Required
		id: React.PropTypes.string.isRequired,
		type: React.PropTypes.oneOf(['text', 'longtext', 'password', 'number']).isRequired,
		status: React.PropTypes.oneOf(['pristine', 'valid', 'error']).isRequired,
		onChange: React.PropTypes.func.isRequired,
		onBlur: React.PropTypes.func.isRequired,
		value: React.PropTypes.string.isRequired
	};

	static defaultProps = {
		value: '',
		type: 'text',
		status: 'pristine',
		onBlur: () => null
	};

	constructor (props) {
		super(props);

		this.focused = false;
	}

	onChange (val) {

		const { onChange, type } = this.props;
		const value = type === 'number' ? parseFloat(val, 10) : val;

		if (onChange) {
			onChange(value);
		}
	}

	setFocus () {
		ReactDOM.findDOMNode(this.refs.input).focus();
	}

	render () {

		const { id, type, onBlur, value } = this.props;
		const isTextarea = type === 'longtext';
		const Tag = isTextarea ? 'textarea' : 'input';

		return (
			<div className={`form__input  ${isTextarea ? 'form__input--textarea' : ''} `}>
				<Tag
					ref="input"
					id={id}
					onChange={(e) => this.onChange(e.target.value)}
					onBlur={onBlur}
					className="form__input-el"
					type={isTextarea ? null : type}
					value={value}
					placeholder={'An easy way to beat this champion is to hit him in the highlighted areas!'}
					min={type === 'number' ? '0' : null}
					maxLength={700}
					rows={9}
				/>
			</div>
		);
	}
}

export default Input;
