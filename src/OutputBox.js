// import React, { Component } from 'react';

// class OutputBox extends Component {
//     render() {
//         return (
//             <div>
//                 <p>
//                     {this.props.outputValue}
//                 </p>
//             </div>
//         );
//     }
// }

// export default OutputBox;

import React from 'react';

const l33t = {
    'A': 4,
    'E': 3,
    'G': 6,
    'I': 1,
    'O': 0,
    'S': 5,
    'T': 7,    
}

function toL33t(originalText) {
    const letterArray = originalText.split('');
    const l33tArray = letterArray.map(letter => {
        return l33t[letter.toUpperCase()] || letter;
    });
    return l33tArray.join('');
}

const OutputBox = (props) => {
    return (
        <div>{toL33t(props.outputValue)}</div>
    )
};

export default OutputBox;