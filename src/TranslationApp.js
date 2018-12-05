import React, { Component } from 'react';
import InputBox from './InputBox';
import OutputBox from './OutputBox';

class TranslationApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
                <h1>Walky Talky App</h1>
                <p>Type Here</p>
                <InputBox
                    inputValue={this.state.value} onChange={this._onChange}
                />
                <OutputBox
                    outputValue={this.state.value}
                />
            </div>
        );
    }

    _onChange = event => {
        this.setState({
            value: event.target.value
        });
    }
}

export default TranslationApp;