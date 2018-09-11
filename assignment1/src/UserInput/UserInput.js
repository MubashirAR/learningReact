import React, { Component } from 'react'
const userInput = (props) => {
    return <div>
        <input value={props.value} onChange={props.valueChanged} type="text"/>
    </div>
}

export default userInput;