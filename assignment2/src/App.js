import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    myValue: 'Say something here..'
  }

  valueChanged = event => {
    // console.log(event);
    
    var myValue = event.target.value;
    this.setState({myValue:myValue})
  }

  removeCharacter = (event,index) => {
    var myValue = this.state.myValue;
    var myValueCharacters = [...myValue];
    myValueCharacters.splice(index,1);
    myValue = myValueCharacters.join('');
    this.setState({myValue:myValue})
  }

  render() {
    
      var letters = [...this.state.myValue];
      
      const charComponents = letters.map((item,index) => 
        <CharComponent 
          click = {(event) => this.removeCharacter(event, index)}
          letter={item}
          key={index}/>
      
    )
    
    return (
      <div className="App">
        <input value={this.state.myValue} onChange={this.valueChanged}/>
        <ValidationComponent
        myValueLength={this.state.myValue.length}/>
        {charComponents}
      </div>
    );
  }
}

export default App;
