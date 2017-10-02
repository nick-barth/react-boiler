import React from 'react';

class Advertisement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.aspect}>{this.props.children}</div>
        );
    }
};

export default Advertisement;
