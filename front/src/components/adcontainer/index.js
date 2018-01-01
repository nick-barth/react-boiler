import React from 'react';

class Adcontainer extends React.Component {
	static propTypes = {
		location: React.PropTypes.string.isRequired,
		children: React.PropTypes.node.isRequired
	};

	constructor (props) {
		super(props);
	}

	render () {
		return (
            <div className={this.props.location}>{this.props.children}</div>
		);
	}
}

export default Adcontainer;
