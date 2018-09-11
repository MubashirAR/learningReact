import React, { Component } from 'react';
import './Person.css';
const person = (props) => {
    return <div className="Person">
        <p onClick={props.click}> I'm {props.name} and I am {props.age} years old </p>
        <p>{props.children}</p>
        <input value={props.name} type="text" onChange={props.nameChanged}/>
    </div>
};
export default person;