import React, { Component } from 'react';

class OutputBox extends Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.outputValue}
                </p>
            </div>
        );
    }
}

export default OutputBox;