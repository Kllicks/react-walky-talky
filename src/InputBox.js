import React, { Component } from 'react';

class InputBox extends Component {
    render() {
        return (
            <div>
                <input value={this.props.inputValue} onChange={this.props.onChange}></input>
            </div>
        );
    }
}

export default InputBox;