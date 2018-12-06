import React, { Component } from 'react';

import InputBox from './InputBox';
import OutputBox from './OutputBox';

import {toL33t, toUpperCase} from './translations';

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
                    inputValue={this.state.value} 
                    // onChange={this._onChange}
                    handleChange={this._onChange}

                />
                <OutputBox 
                    outputValue={this.state.value}
                />
                <OutputBox
                    // outputValue={this.state.value.toUpperCase()}
                    outputValue={this.state.value}
                    transformFunction={toUpperCase}
                />
                <OutputBox
                    outputValue={this.state.value}
                    transformFunction={toL33t}
                />
            </div>
        );
    }

    // _onChange = event => {
    //     this.setState({
    //         value: event.target.value
    //     });
    // }

    _onChange = (value) => {
        this.setState({
            value
        });
    }
}

export default TranslationApp;