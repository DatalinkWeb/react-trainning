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

  switchNameHandler = () => {
    console.log('success');
  }

  render() {
    return (
      <div className="App">
        <h1>Hello!!! World????</h1>
        <button onClick={this.switchNameHandler}>Switcher</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My hobbies are: awesome Makeup effects </Person>
      </div>
    );
  }
}

export default App;
