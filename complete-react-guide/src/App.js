import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Malakas', age: 28},
      {name: 'Trompas', age: 32},
      {name: 'Anna', age: 22}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('success');
    // Wrong method this.state.persons[0].name= 'Malakotrampoukos';
    this.setState({
      persons:[
      {name: newName, age: 28},
      {name: 'Trompas', age: 32},
      {name: 'Anna', age: 23}
    ]
   })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
      {name: 'Malakas', age: 28},
      {name: event.target.value, age: 32},
      {name: 'Anna', age: 23}
    ]
   })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello!!! World????</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Malak')}>Switcher</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          click={this.switchNameHandler.bind(this, 'Trompatatour')}
          changed={this.nameChangedHandler}>My hobbies are: awesome Makeup effects </Person>
      </div>
    );
  }
}

export default App;
