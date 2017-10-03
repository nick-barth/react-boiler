import React from 'react';

class Adcontainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.location}>{this.props.children}</div>
        );
    }
};

export default Adcontainer;
