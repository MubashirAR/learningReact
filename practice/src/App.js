import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    // console.log('wasClicked');
    // this.state.persons[0].name = "Mubbbb"
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
    console.log('deletePersonHandler');
    
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }
  render() {
    

    let persons = null;

    // for (let index = 0; index < this.state.persons.length; index++) {
      
      
    // }
    let btnClass = '';
    if (this.state.showPersons) {
      persons = ( <div>
        {
          this.state.persons.map((person,index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name} 
                  age={person.age} 
                  click= {this.deletePersonHandler.bind(this,index)}
                  nameChanged= {(event) => this.nameChangedHandler(event, person.id)}
                  />
                </ErrorBoundary>
            )
          })
        }
          </div> )
          btnClass = classes.Red
    }
    const assignedClasses = [] 
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    } 
    if(this.state.persons.length <=1 ) {
      assignedClasses.push(classes.bold);
    } 
    
    
    return (
      <div className={classes.App}>
        <h1> Hi, I am a react app</h1>
        <p className={assignedClasses.join(' ')}> Hi, I am a react app</p>
        <button 
        className={btnClass}
        onClick={this.togglePersonsHandler} >Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Hi, I am a react app!!!!!!'))
  }
}

export default App;
