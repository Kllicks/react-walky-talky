// import React, { Component } from 'react';

// class InputBox extends Component {
//     render() {
//         return (
//             <div>
//                 <input value={this.props.inputValue} onChange={this.props.onChange}></input>
//             </div>
//         );
//     }
// }

// export default InputBox;

import React from 'react';

const InputBox = (props) => {
    return (
        <input 
            className='input-box'
            value={props.inputValue}
            onChange={(e) => {
                props.handleChange(e.target.value);
            }}
        />
    );
}

export default InputBox;