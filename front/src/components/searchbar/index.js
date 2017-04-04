/*
 * Dependencies
 */

// Vendors
import React from 'react';

// Components
import Icon, { shape as iconShape } from 'components/icon';

/*
 * TEXT
 * ====
 */
class Text extends React.Component {

	static propTypes = {
		icon: iconShape,
		title: React.PropTypes.node,
		children: React.PropTypes.node,
		centered: React.PropTypes.bool.isRequired
	};

	static defaultProps = {
		centered: false
	};

	constructor (props) {
		super(props);
	}

	render () {

		const { icon, title, children, centered } = this.props;

		return (
			<div className={`text ${centered ? 'text--centered' : ''}`}>
				{icon ? (
					<div className="text__icon">
						<Icon name={icon} />
					</div>
				) : null}

				{title ? (
					<div className="text__title">
						{title}
					</div>
				) : null}

				<div className="text__body">
					{children}
				</div>
			</div>
		);
	}
}

export default Text;
