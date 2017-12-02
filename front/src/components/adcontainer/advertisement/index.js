import React from 'react';

class Advertisement extends React.Component {
	static propTypes = {
		ad: React.PropTypes.string.isRequired
	};

	render() {
		return (
            <div className={this.props.ad}>{this.props.children}</div>
		);
	}
}

export default Advertisement;
