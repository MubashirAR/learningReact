import React, { Fragment } from 'react';
import classes from './Cockpit.css'
import Auxiliary from "../../hoc/Auxiliary";
const cockpit = props => {
    const assignedClasses = [];
    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ')
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    // return <Fragment>
    return <Auxiliary>
        <h1>{props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}>
            Hi, I am a react app</p>
        <button className={btnClass} onClick={() => props.click()}>Toggle Persons</button>
        <button onClick={props.login}>
            Log in
        </button>
    {/* </Fragment> */}
    </Auxiliary>

};

export default cockpit;