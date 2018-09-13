import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium'
import Person from './Person/Person';

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
    
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    // for (let index = 0; index < this.state.persons.length; index++) {
      
      
    // }
    if (this.state.showPersons) {
      persons = ( <div>
        {
          this.state.persons.map((person,index) => {
            return (
              <Person
                name={person.name} 
                age={person.age} 
                click= {this.deletePersonHandler.bind(this,index)}
                nameChanged= {(event) => this.nameChangedHandler(event, person.id)}
                key={person.id}/>
            )
          })
        }
          </div> )
        style.backgroundColor = 'red';
        style[':hover'].backgroundColor = 'salmon';
    }
    let classes = [] 
    if (this.state.persons.length <= 2) {
      classes.push('red');
    } 
    if(this.state.persons.length <=1 ) {
      classes.push('bold');
    }
    
    return (
      <StyleRoot>
      <div className="App">
        <h1> Hi, I am a react app</h1>
        <p className={classes.join(' ')}> Hi, I am a react app</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler} >Toggle Persons</button>
        {persons}
      </div>
      </StyleRoot>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Hi, I am a react app!!!!!!'))
  }
}

export default Radium(App);
