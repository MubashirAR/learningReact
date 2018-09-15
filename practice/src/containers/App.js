import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from "../components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      {id: 'b3h5b4j1', name:"Ashish", age:"23"},
      {id: 'b3h5b4j2', name:"Mubashir", age:"22"},
      {id: 'b3h5b4j3', name:"Rahim", age:"23"}

    ],
    showPersons : false
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name:"Ashish", age:"23"},
        { name:newName, age:"22"},
        { name:"Rahim", age:"23"}
  
      ]
    })
    
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => id == person.id );
    const person = Object.create(this.state.persons[personIndex]);   
    const persons = [...this.state.persons];
    person.name = event.target.value;
    persons[personIndex] = person;
    
    this.setState({ persons: persons })
  }
  togglePersonsHandler = () => {
     this.setState({
      showPersons : !this.state.showPersons
     })
  }
  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }
  render() {
    

    let persons = null;

    if (this.state.showPersons) {
          persons = <Persons 
          persons={this.state.persons}
          clicked= {this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;
    }
    
    return (
      <div className={classes.App}>
      <Cockpit
      persons= {this.state.persons}
      showPersons= {this.state.showPersons}
      click={this.togglePersonsHandler}/> 
        {persons}
      </div>
    );
  }
}

export default App;
