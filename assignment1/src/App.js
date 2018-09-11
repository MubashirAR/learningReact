import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput';
import './UserOutput/UserOutput.css'

class App extends Component {
  state = {
    value:'asdfgn',
    text1: 'lrem ipsum',
    text2: 'NOT lrem ipsum',
  }
  valueChanged= (event) => {
    console.log('aishfioahfoiah');
    console.log(event.target.value);
    

    console.log(this.state);
    this.setState({
      value:event.target.value,
      text1: 'new value',
      text2: 'NOT lrem ipsum',
    })
    // this.state.text1 = 'something else'
    
    
    // this.state.value = 'NOthing'
  }
  render() {
    const style = {
      border: '1px solid black',
      margin:'10px',
      padding: '15px'
    };
    return (
      <div className="App">
        Hello {this.state.value}
        <UserInput 
        value={this.state.value}
        valueChanged={this.valueChanged}/>
        <UserOutput value={this.state.value}
        valueChanged={this.valueChanged}
        style={style}/>
        <UserOutput value={this.state.value}
        style={style}/>
      </div>
    );
  }
}

export default App;
