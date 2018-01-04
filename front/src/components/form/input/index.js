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
		this.state = {
			maxLength: ''
		};
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

	componentDidMount () {
		const maxLength = ReactDOM.findDOMNode(this.refs.input).maxLength;

		this.setState(() => ({
			maxLength: maxLength
		}));
	}

	render () {

		const { id, type, onBlur, value, userFeedback, tipSent } = this.props;
		const { maxLength } = this.state;
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
					rows={7}
				/>
				<div
					style={{ 'marginBottom': `${tipSent ? '3rem' : '.8rem'}` }}
					className="form__feedback"
				>
					<div className="form__character-indicator">
						{value.length}/{maxLength}
					</div>

				{/* Changes the color of the feedback text depending whether or not tipsent is true and if the user typed more than 60 characters. */}
					<div style={{ 'color': `${tipSent ? '#2EAF21' : value.length >= 60 ? '#2EAF21' : '#d22730'}` }}
						className={`form__tip-longer  ${userFeedback ? 'form__user-feedback' : null}`}
					>

				{/* Gives the user feedback depending on how much they've typed and whether or not tipSent is true. */}
						{value.length < 60 && value.length > 0 ?
							'Tip Must Be Longer' :
							tipSent ?
							'Tip Submitted!' :
							value.length === 0 ?
							'Please enter a tip' :
							value.length >= 60 ?
							'Ok' :
							null}
					</div>
				</div>
			</div>
		);
	}
}

export default Input;
