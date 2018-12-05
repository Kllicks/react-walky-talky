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
                <InputBox/>
                <OutputBox/>
            </div>
        );
    }
}

export default TranslationApp;