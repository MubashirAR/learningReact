import React, { Component } from 'react';

const validationComponent = props => {
    console.log(props.myValueLength);
    
    var output;
    if (props.myValueLength>10) {
        output = (
            <p>
                Text too long
            </p>
        )
    } else if (props.myValueLength<5) {
        output = (
            <p>
                Text too short
            </p>
        )
    } else {
        output = (
            <p>
                {props.myValueLength}
            </p>
        )
    }
    return (
        <div>
            {output}
        </div>
    )
}

export default validationComponent;