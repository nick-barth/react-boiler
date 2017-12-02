import React from 'react';

class Adcontainer extends React.Component {
	static propTypes = {
		location: React.PropTypes.string.isRequired
	};

	render () {
		return (
            <aside className={this.props.location}>{this.props.children}</aside>
		);
	}
}

export default Adcontainer;
