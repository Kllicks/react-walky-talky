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

const OutputBox = (props) => {
    
    let textToDisplay = props.outputValue;
    if (props.transformFunction) {
        textToDisplay = props.transformFunction(props.outputValue);
    }
    
    return (
        <div className='output-box'>{textToDisplay}</div>
    )
};

export default OutputBox;