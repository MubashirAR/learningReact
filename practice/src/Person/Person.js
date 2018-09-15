import React, { Component } from 'react';
import classes from './Person.css';
const person = (props) => {
    const rndm = Math.random();
    if (rndm>0.7) {
        throw Error('Something went wrong')
    }
    return <div className={classes.Person} >
        <p onClick={props.click}> I'm {props.name} and I am {props.age} years old </p>
        <p>{props.children}</p>
        <input value={props.name} type="text" onChange={props.nameChanged}/>
    </div>
};
export default person;