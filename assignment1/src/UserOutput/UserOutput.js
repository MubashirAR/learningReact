import React, { Component } from 'react';
const userOutput = (props) => {
    return <div style={props.style}> 
        {props.value}
    </div>
}

export default userOutput